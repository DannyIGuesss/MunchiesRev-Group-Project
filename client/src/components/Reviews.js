// *****Main view for all Restraunt Reviews*****
import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import ('../cssFiles/navBar.css')

const Reviews = (props) => {
    return (
        <div>
            <nav>
                <h1>MunchiesRev</h1>
                <div className='nav-btn'>
                    <button><Link to={'/'}>Home</Link></button>
                    <button><Link to={'/'}>Logout</Link></button>
                </div>
            </nav>
        </div>
)}

export default Reviews;