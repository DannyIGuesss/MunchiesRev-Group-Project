import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import ('../cssFiles/navBar.css')

const UpdateReview = (props) => {
    return (
        <div>

            <nav>
            <h1>MunchiesRev</h1>
                <div className='nav-btn'>
                    <button><Link to={'/'}>Home</Link></button>
                    <button><Link to={'/'}>Logout</Link></button>
                </div>
            </nav>
            
            <div className="row">
                <div className="mx-auto col-10 col-md-8 col-lg-6">
                <h3 className="mx-auto col-10 col-md-8 col-lg-6">Munching a Review</h3>
                    <form className="form-example"
                    // onSubmit={updateReview}
                    >
                        <p className="description">Error pop up</p>
                        <div className="form-group">
                            <label className="description">Name</label><br />
                            <input className="form-control username" type="text" />
                            {/* <input type="text" 
                            name="firstName" 
                            value={firstName} 
                            onChange={(e) => { setFirstName(e.target.value) }} /> */}
                        </div>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
)}

export default UpdateReview