import React, { useState } from 'react';
import CreateContact from '../Contacts/CRUD/CreateContact';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Contacts from '../Contacts/Contacts';


const Cockpit = () =>
{
    const[filter,setFilter]=useState("");
    const [contact,setContact] = useState([]);

    useEffect(()=>{
            axios.get("http://127.0.0.1:8000/api/contactlist")
            .then(response=>{
                console.log(response.data);
                setContact(response.data);
            }).catch(error=>{
                console.log(error);
            });
        },[])
    const search = (e)=>
    {
        
        if(filter === "bycountry")
        {
            axios.get("http://127.0.0.1:8000/api/contactlist/bycountry/"+e.target.value)
            .then(response=>{
                console.log(response.data);
                setContact(response.data);
            }).catch(error=>{
                console.log(error);
            });
        }
        else if(filter === "bycity")
        {
            axios.get("http://127.0.0.1:8000/api/contactlist/bycity/"+e.target.value)
            .then(response=>{
                console.log(response.data);
                setContact(response.data);
            }).catch(error=>{
                console.log(error);
            });
        }
        else if(filter === "bystate")
        {
            axios.get("http://127.0.0.1:8000/api/contactlist/bycity/"+e.target.value)
            .then(response=>{
                console.log(response.data);
                setContact(response.data);
            }).catch(error=>{
                console.log(error);
            });
        }
        
    }
    return(
    <div>
        <h1>A Contact Book</h1>
        <div>
        <Link to="/createcontact"><button style={{textAlign : 'left'}} >Add Contact</button></Link>
        <span><b>Filtered By: </b></span>
        <select name="filter" id="filter" onChange={(e) =>setFilter(e.target.value)}>
            <option value="allcontacts">All Contacts</option>
            <option value="bycountry">By Country</option>
            <option value="bycity">By City</option>
            <option value="bystate">By State</option>
        </select>
        <input type="text" name="search" id="search" value="search here" onChange={search}/>

        </div>
        
        <Contacts contacts={contact}/>
    </div>
    );
}
export default Cockpit;