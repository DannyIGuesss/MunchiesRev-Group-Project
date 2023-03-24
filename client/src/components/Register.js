import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import ('../cssFiles/navBar.css')

const Register = (props) => {
    return (
        <div>
            <nav>
                <h1>MunchiesRev</h1>
                <div className='nav-btn'>
                    <button><Link to={'/'}>Home</Link></button>
                    <button><Link to={'/Login'}>Login</Link></button>
                </div>
            </nav>
        </div>
)}

export default Register;