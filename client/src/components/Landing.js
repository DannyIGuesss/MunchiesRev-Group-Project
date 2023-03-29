import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { LoggedUserContext } from '../context/loggedUserContext'
import ('../cssFiles/navBar.css')
import('../cssFiles/landing.css')

const Landing = (props) => {
    const {loggedUser,} = useContext(LoggedUserContext)

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
                    <p>Restaurant review platform, that makes dine-in/take-out decisions easy.</p>
                    <p>Did you have a good experience? <br/>Did you have a bad experience? <br/> Tell us! we all would like to know</p>
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