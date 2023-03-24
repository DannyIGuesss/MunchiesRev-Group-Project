import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import ('../cssFiles/navBar.css')

const Login = (props) => {
    return (
        <div>
            <nav>
                <h1>MunchiesRev</h1>
                <div className='nav-btn'>
                    <button><Link to={'/'}>Home</Link></button>
                    <button><Link to={'/register'}>Register</Link></button>
                </div>
            </nav>
        </div>
)}

export default Login;