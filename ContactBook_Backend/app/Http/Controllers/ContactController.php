<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    //
    function listbycontact(Request $request)
    {
        $contacts = Contact::all();
        return $contacts;
    }
    function listbycountry(Request $request)
    {
        $country=$request->value;
        $contacts = Contact::where('address','like','%'.$country.'%')->get();
        return $contacts;
    }
    function listbystate(Request $request)
    {
        $state=$request->value;
        $contacts = Contact::where('address','like','%'.$state.'%')->get();
        return $contacts;
    }
    function listbycity(Request $request)
    {
        $city=$request->value;
        $contacts = Contact::where('address','like','%'.$city.'%')->get();
        return $contacts;
    }
    function contactDetails(Request $request)
    {
        $id=$request->id;
        $contact = Contact::where('id',$id)->first();
        return $contact;
    }
    function createProfile(Request $request)
    {
        $contact = new Contact();
        $contact->firstname = $request->fname;
        $contact->lastname = $request->lname;
        $contact->companyname = $request->cname;
        $contact->address = $request->address;
        $contact->telephonenumber = $request->tnumber;
        $contact->email = $request->email;
        $contact->mobilenumber = $request->mnumber;
        $contact->save();
        return "Profile Created";
    }
    function updatePage(Request $request)
    {
        $id=$request->id;
        $contact = Contact::where('id',$id)->first();
        return $contact;
    }
    function updateProfile(Request $request)
    {
        $id=$request->id;
        $contact = Contact::where('id',$id)->first();
        $contact->firstname = $request->fname;
        $contact->lastname = $request->lname;
        $contact->companyname = $request->cname;
        $contact->address = $request->address;
        $contact->telephonenumber = $request->tnumber;
        $contact->email = $request->email;
        $contact->mobilenumber = $request->mnumber;
        $contact->save();
        return "Profile Updated";
    }
    function deleteContact(Request $request)
    {
        $id=$request->id;
        $contact = Contact::where('id',$id)->first();
        $contact->delete();
        return "Contact Deleted";
    }
    
}
