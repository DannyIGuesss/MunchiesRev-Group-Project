import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import ('../cssFiles/navBar.css')

const UpdateReview = (props) => {
    return (
        <div>
            <nav>
                <div className='nav-btn'>
                    <button><Link to={'/'}>Home</Link></button>
                    <button><Link to={'/'}>Logout</Link></button>
                </div>
            </nav>
            <div class="row">
                <div class="mx-auto col-10 col-md-8 col-lg-6">
                <h1 class="mx-auto col-10 col-md-8 col-lg-6">MunchiesRev a Review</h1>
                    <form class="form-example"
                    // onSubmit={updateReview}
                    >
                        <p class="description">Error pop up</p>
                        <div class="form-group">
                            <label class="description">Name</label><br />
                            <input class="form-control username" type="text" />
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