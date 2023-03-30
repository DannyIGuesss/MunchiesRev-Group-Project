import axios from 'axios';
import React, {useContext, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom'
import { LoggedUserContext } from '../context/loggedUserContext'
import { RestaurantsContext } from '../context/restaurantContext';
import ('../cssFiles/navBar.css')
import ('../cssFiles/reviewCU.css')

const CreateReview = (props) => {
    const [errors, setErrors] = useState([]);
    const [restaurant, setRestaurant] = useState("InNOut");
    const [rating, setRating] = useState("1");
    const [review, setReview] = useState("");
    const {loggedUser, setLoggedUser} = useContext(LoggedUserContext);
    const { restaurants, SetRestaurants} = useContext(RestaurantsContext)
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit review')
        axios.post(`http://localhost:8000/api/postReview/${restaurant}`, {
            restaurant,
            review,
            rating
        }, {withCredentials: true})
            .then ( res => {
                console.log(res.data)
                //Navigate back to the restaurant review section or main not sure which yet
                navigate('/Restaurants')
            } )
            .catch( res => setErrors(res) )
    }

    const logout = () =>{
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
        .then((res) => {
            console.log(res)
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
        })
    }


    return (
        <div>
            <nav>
                <h1>MunchiesRev</h1>
                <div className='nav-btn'>
                    {!loggedUser._id ? <button><Link to={'/login'}>Login</Link></button> : <button onClick={logout}>Logout</button>}
                </div>
            </nav>
        <div>
            <div className='main-body'>
                <div className='left-side'>
                    <h2>Hello {loggedUser.firstName}, please make a review</h2>
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
                                    <select className="form-select" type='text' onChange={e=>setRestaurant(e.target.value)}>
                                        {
                                            restaurants.map((shop, index) => {
                                                return (
                                                    <option value={shop}>{shop}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='form-outline'>
                                    <label>Rating:</label>
                                    <select className="form-select" type='text' onChange={e=>setRating(e.target.value)}>
                                        <option value='1'>⭐</option>
                                        <option value='2'>⭐⭐</option>
                                        <option value='3'>⭐⭐⭐</option>
                                        <option value='4'>⭐⭐⭐⭐</option>
                                        <option value='5'>⭐⭐⭐⭐⭐</option>
                                    </select>
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
        </div>
)}

export default CreateReview;