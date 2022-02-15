import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Contacts = (props) =>
{
    
    const contact =props.contacts;
    return(       
    <div>
        
                <table className="table table-bordered" style={{ marginTop: "50px", marginLeft: "auto", marginRight: "auto" }}>
                    <tr className="column text-center">
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>CompanyName</th>
                    <th>Address</th>
                    <th>TelephoneNumber</th>
                    <th>Email</th>
                    <th>MobileNumber</th>
                    <th></th>
                    </tr>
                    
                    {contact.map(i=>(
                        <tr className="column text-center">
                        <td>
                        <span>  { i.id }</span>
                        </td>

                        <td>
                        <span>  { i.firstname }</span>
                        </td>
                    
                    
                        <td>
                        <span> { i.lastname }</span>
                        </td>
                    
                    
                        <td>
                        <span> { i.companyname }</span>
                        </td>
                    
                    
                        <td>
                        <span> { i.address }</span>
                        </td>
                    
                    
                        <td>
                        <span> { i.telephonenumber }</span>
                        </td>
                    
                    
                        <td>
                        <span> { i.email }</span>
                        </td>
                    
                    
                        <td>
                        <span> { i.mobilenumber }</span>
                        </td>

                        <td>
                            <Link to={["/details/",i.id].join("")}><button>Details</button></Link>
                        </td>
                    </tr>
                    ))}
                </table>
        
    </div>
    );
}
export default Contacts;