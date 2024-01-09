import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

const Register = () => {
    const [name,setName] = useState ("")
    const [email,setEmail] = useState ("")
    const [Password,setPassword] = useState ("")
    const navigate = useNavigate()

    const validation = () =>{
      let inuser = true
      let errormsg = "enter your data "
      if(name === null , name === ""){
        inuser = false
        errormsg += "username"
    
      }
      if(email === null , email === ""){
        inuser = false
        errormsg += " email "
        
      }
      if(Password === null , Password === ""){
        inuser = false
        errormsg += " password "

      }
      alert(errormsg)
      return inuser
    }
    const sevdata = (e) =>{
        e.preventDefault()
        console.log("savdata");

        let data = {name,email,Password,role : 2}

      if (validation()){
        fetch ("http://localhost:4000/userdata",{
          method : "POST",
          headers : {
            "Content-Type" : "application/json",
          },
          body : JSON.stringify(data)
        }).then((result)=>{
          result.json().then((resp)=>{
            console.log(resp);
            navigate("/login")
          })
        })
      }
    }
    return ( 
        <>
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <form onSubmit={sevdata}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' value={name} onChange={(e)=> setName(e.target.value)} size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Your Email'value={email} onChange={(e)=> setEmail(e.target.value)} size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' value={Password} onChange={(e)=> setPassword(e.target.value)} size='lg' id='form3' type='password'/>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
        </MDBCardBody>
        </form>
      </MDBCard>
    </MDBContainer>
        </>
     );
}
 
export default Register;