import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Redirect,Link } from 'react-router-dom';

const CreateContact = () =>
{
    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");
    const[cname,setCname]=useState("");
    const[address,setAddress]=useState("");
    const[tnumber,setTnumber]=useState("");
    const[email,setEmail]=useState("");
    const[mnumber,setMnumber]=useState("");
    const handleSubmit = (e) =>
    {  
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

        const res = axios.post('http://127.0.0.1:8000/api/createcontact',obj);
                if(res.obj.status === 200){
                    alert("Contact Created");
                    
                }

                else if(res.obj.status === 422){
                    
                    alert(res.obj.errors);
                    
                }

                
    }
    return(
    <div>
        <h1>Create Contact</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
        <span>First Name : </span>
        <input type="text" name="fname" id="fname" onChange={(e) =>setFname(e.target.value)}/><br/>
        <span>Last Name : </span>
        <input type="text" name="lname" id="lname" onChange={(e) =>setLname(e.target.value)}/><br/>
        <span>Company Name : </span>
        <input type="text" name="cname" id="cname" onChange={(e) =>setCname(e.target.value)}/><br/>
        <span>Address : </span>
        <input type="text" name="address" id="address" onChange={(e) =>setAddress(e.target.value)}/><br/>
        <span>Telephone Number : </span>
        <input type="text" name="tnumber" id="tnumber" onChange={(e) =>setTnumber(e.target.value)}/><br/>
        <span>Email : </span>
        <input type="text" name="email" id="email" onChange={(e) =>setEmail(e.target.value)}/><br/>
        <span>Mobile Number : </span>
        <input type="text" name="mnumber" id="mnumber" onChange={(e) =>setMnumber(e.target.value)}/><br/>
        <input type="submit" value="Save"/>
        </form>
        <Link to="/">Back</Link>
    </div>
    );
}
export default CreateContact;