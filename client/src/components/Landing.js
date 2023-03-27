import React from 'react';
import {Link} from 'react-router-dom'
import ('../cssFiles/navBar.css')
import('../cssFiles/landing.css')

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
            <div className='main-body'>
                <div className='left-side'>
                    <h2>What we do here at MunchiesRev</h2>
                    <p>Someone who is more descriptive can write about what the website is about!</p>
                </div>
                <div className='right-side'>
                    <div className='slider'>
                        {/* this div is for the images slider */}
                    </div>
                </div>
            </div>
        </div>
)}

export default Landing;