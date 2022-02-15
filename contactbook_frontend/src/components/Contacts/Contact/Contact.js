import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';


const Contact = (props) =>
{
    const [contact,setContact] = useState([]);
    const {id : did} = useParams();
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/details/"+did)
        .then(response=>{
            console.log(response.data);
            setContact(response.data);
        }).catch(error=>{
            console.log(error);
        });
    },[])
    const deleteContact = () =>
    {
        
        axios.get("http://127.0.0.1:8000/api/deletecontact/"+did)
        .then(response=>{
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        });
    
    }
    return(
    <div>
       <h1>View Contact: </h1>
        <p>First Name : { contact.firstname }</p>
        <p>Last Name : { contact.lastname }</p>
        <p>Company Name : { contact.companyname }</p>
        <p>Address : { contact.address }</p>
        <p>Telephone Number : { contact.telephonenumber }</p>
        <p>Email : { contact.email }</p>
        <p>Mobile Number : { contact.mobilenumber }</p>
        <Link to={["/updatecontact/",contact.id].join("")}><button>Update</button></Link>
        <Link to="/"><button onClick={ deleteContact }>Delete</button></Link>
    </div>
    );
}
export default Contact;