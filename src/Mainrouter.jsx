import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import Admin from './Admin';
import User from './User';

const Mainrouter = createBrowserRouter([
    {
        path : "/",
        element : <><Navbar/></>
    },
    {
        path : "/register",
        element: <><Navbar /><Register /></>       
    },
    {
        path : "/login",
        element : <><Navbar/><Login/></>
    },
    {
        path : "/admin",
        element : <><Navbar/><Admin/></>
    },
    {
        path : "/user",
        element : <><Navbar/><User/></>
    }
])

export default Mainrouter