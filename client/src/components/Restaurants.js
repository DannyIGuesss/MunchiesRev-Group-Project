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
                    <button><Link to={'/'}>Home</Link></button>
                    <button><Link to={'/'}>Logout</Link></button>
                </div>
            </nav>
            <div>
                <h2>Hello {loggedUser.firstName}</h2>
            </div>
        </div>
)}

export default Restaurants;