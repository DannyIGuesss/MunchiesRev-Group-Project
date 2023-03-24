import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import ('../cssFiles/navBar.css')

const Landing = (props) => {
    return (
        <div>
            <nav>
                <h1>MunchiesRev</h1>
                <div className='nav-btn'>
                    <button><Link to={'/register'}>Register</Link></button>
                    <button><Link to={'/Login'}>Login</Link></button>
                </div>
            </nav>
        </div>
)}

export default Landing;