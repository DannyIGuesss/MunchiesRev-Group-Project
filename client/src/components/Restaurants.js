// *****Dashboard to see all restraunts*****

import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { LoggedUserContext } from '../context/loggedUserContext'
import axios from 'axios';
import ('../cssFiles/navBar.css')

const Restaurants = (props) => {
    const {loggedUser, setLoggedUser} = useContext(LoggedUserContext)
    const navigate = useNavigate();


    const logout = () =>{
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
        .then((res) => {
            console.log(res)
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
        })
    }


    return (
        <div>
            <nav>
                <h1>MunchiesRev</h1>
                <div className='nav-btn'>
                    {!loggedUser._id ? <button><Link to={'/login'}>Login</Link></button> : <button onClick={logout}>Logout</button>}
                </div>
            </nav>
            <div>
                <h2>Hello {loggedUser.firstName}</h2>
                {loggedUser._id ? <button><Link to={'/createReview'}>Create a Review</Link></button> : <h1>You need to login...</h1>}
            </div>
        </div>
)}

export default Restaurants;