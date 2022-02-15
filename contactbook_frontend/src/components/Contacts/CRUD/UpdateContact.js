import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
const UpdateContact = () =>
{
    const {id : did}=useParams();
    const[contact,setContact]=useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/updatecontact/"+did)
        .then(response=>{
            console.log(response.data);
            setContact(response.data);
        }).catch(error=>{
            console.log(error);
        });
    },[])

    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");
    const[cname,setCname]=useState("");
    const[address,setAddress]=useState("");
    const[tnumber,setTnumber]=useState("");
    const[email,setEmail]=useState("");
    const[mnumber,setMnumber]=useState("");
    
    
    
    const handleSubmit = (e) =>
    {   alert({fname});
        e.preventDefault();
        

        var obj={
            "fname" : fname,
            "lname" : lname,
            "cname" : cname,
            "address" : address,
            "tnumber" : tnumber,
            "email" : email,
            "mnumber" : mnumber
        };

        const res = axios.post('http://127.0.0.1:8000/api/updatecontact/'+did,obj);
                if(res.obj.status === 200){
                    
                    alert('Contact Updated');
                }

                else if(res.obj.status === 422){
                    
                    alert(res.obj.errors);
                    
                }
                
    }

    return(
    <div>
        <div>
        <h1>Update Contact</h1>
        <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <span>First Name : </span>
        <input type="text" name="fname" id="fname" placeholder={contact.firstname} /><br/>
        <span>Last Name : </span>
        <input type="text" name="lname" id="lname" placeholder={contact.lastname} onChange={(e) =>setLname(e.target.value)}/><br/>
        <span>Company Name : </span>
        <input type="text" name="cname" id="cname" placeholder={contact.companyname} onChange={(e) =>setCname(e.target.value)}/><br/>
        <span>Address : </span>
        <input type="text" name="address" id="address" placeholder={contact.address} onChange={(e) =>setAddress(e.target.value)}/><br/>
        <span>Telephone Number : </span>
        <input type="text" name="tnumber" id="tnumber" placeholder={contact.telephonenumber} onChange={(e) =>setTnumber(e.target.value)}/><br/>
        <span>Email : </span>
        <input type="text" name="email" id="email" placeholder={contact.email} onChange={(e) =>setEmail(e.target.value)}/><br/>
        <span>Mobile Number : </span>
        <input type="text" name="mnumber" id="mnumber" placeholder={contact.mobilenumber} onChange={(e) =>setMnumber(e.target.value)}/><br/>
        <input type="submit" value="Update"/>
        </form>
        </div>
    </div>
    );
}
export default UpdateContact;