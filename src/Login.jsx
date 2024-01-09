import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const logindata = () =>{
        console.log("Logindata");
        console.log(user,password);

        fetch("http://localhost:4000/userdata?name=" + user).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                if(resp[0]){
                  if(resp[0].role == 1){
                    navigate("/admin")
                  }
                  else{
                    navigate("/user")
                  }
                }
                else{
                  alert("not in data")
                }
            })
        })
    }

    return ( 
        <>
        <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm='6'>
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='user name'
            value={user} onChange={(e)=>setUser(e.target.value)} id='formControlLg' type='text' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password'
            value={password} onChange={(e)=>setPassword(e.target.value)} id='formControlLg' type='password' size="lg"/>
            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={logindata}>Login</MDBBtn>
          </div>
        </MDBCol>
        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        </>
     );
}
 
export default Login;