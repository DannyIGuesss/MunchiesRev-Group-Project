import axios from 'axios';
import React, {useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom'
import ('../cssFiles/navBar.css')
import ('../cssFiles/reviewCU.css')

const CreateReview = (props) => {
    const [errors, setErrors] = useState([]);
    const [restaurant, setRestaurant] = useState("");
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");
    const {id} = useParams();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit review')
        axios.post(`http://localhost:8000/api/postReview/${id}`, {
            restaurant: restaurant,
            rating: rating,
            review: review
        }, { withCredentials: true })
            .then ( res => {
                console.log(res.data)
                //Navigate back to the restaurant review section or main not sure which yet
                navigate('/dash')
            } )
            .catch( res => setErrors(res.response.data.errors) )
    }

    return (
        <div>
            <nav>
                <h1>MunchiesRev</h1>
                <div className='nav-btn'>
                    <button><Link to={'/'}>Home</Link></button>
                    <button><Link to={'/'}>Logout</Link></button>
                </div>
            </nav>
            <div className='main-body'>
                <div className='left-side'>
                    Left Side
                </div>
                <div className='right-side'>
                    <h2 className="mx-auto col-10 col-md-8 col-lg-6">
                        Create a Review!
                    </h2>
                    <form className="mx-auto col-10 col-md-8 col-lg-6" onSubmit={handleSubmit}>
                        <div className='row mb-4'>
                            <div className='col'>
                                <div className="form-outline">
                                    <label>Restaurant:</label>
                                    <input className="form-control" type='text' onChange={e=>setRestaurant(e.target.value)}/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='form-outline'>
                                    <label>Rating:</label>
                                    <input className="form-control" type='text' onChange={e=>setRating(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Review:</label>
                            <textarea className="form-control" type='text' onChange={e=>setReview(e.target.value)}/>
                        </div>
                        <input className='submit-button' type='submit' value='Submit Review'/>
                    </form>
                </div>
            </div>
        </div>
)}

export default CreateReview;