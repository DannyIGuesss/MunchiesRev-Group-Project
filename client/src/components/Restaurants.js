// *****Dashboard to see all restraunts*****

import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom'
import { LoggedUserContext } from '../context/loggedUserContext'
import ('../cssFiles/navBar.css')

const Restaurants = (props) => {
    const {loggedUser, setLoggedUser} = useContext(LoggedUserContext)


    return (
        <div>
            <nav>
                <h1>MunchiesRev</h1>
                <div className='nav-btn'>
                    {!loggedUser._id ? <button><Link to={'/login'}>Login</Link></button> : <button><Link to={'/Logout'}>Logout</Link></button>}
                </div>
            </nav>
            <div>
                <h2>Hello {loggedUser.firstName}</h2>
                {loggedUser._id ? <button><Link to={'/createReview'}>Create a Review</Link></button> : <h1>You need to login...</h1>}
            </div>
        </div>
)}

export default Restaurants;