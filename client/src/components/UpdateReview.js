import axios from 'axios';
import React, {useContext, useState, useEffect} from 'react';
import {Link, useNavigate, useParams, useRoutes} from 'react-router-dom'
import { LoggedUserContext } from '../context/loggedUserContext'
import { RestaurantsContext } from '../context/restaurantContext';
import ('../cssFiles/navBar.css')
import ('../cssFiles/reviewCU.css')


const UpdateReview = (props) => {
    const {_id} = useParams();
    const [errors, setErrors] = useState([]);
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");
    const [restaurant, setRestaurant] = useState("");

    const { loggedUser, setLoggedUser} = useContext(LoggedUserContext);
    const { restaurants, SetRestaurants} = useContext(RestaurantsContext)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getOne/${_id}`)
            .then((res) => {
                console.log(res.data.oneReview)
                setRating(res.data.oneReview.rating);
                setReview(res.data.oneReview.review);
                setRestaurant(res.data.oneReview.restaurant_id);
            })
            .catch((err) => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('update review')

        axios.put(`http://localhost:8000/api/update/${_id}`, {
            restaurant,
            review,
            rating
        }, {withCredentials: true})
            .then ( res => {
                console.log(res.data)
                navigate('/SeeReviews')
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

    const isSelected = (val) => {
        if (val === rating) {
            return 'selected'
        }
    }

    return (
        <div>
            <nav>
                <h1>MunchiesRev</h1>
                <div className='nav-btn'>
                    {
                        loggedUser ? <button><Link to={'/login'}>Login</Link></button> 
                        : 
                        <button onClick={logout}>Logout</button>
                    }
                </div>
            </nav>
            <div className='main-body'>
                <div className='left-side'>
                    <h2>Hello {loggedUser.firstName}, please make a review</h2>
                </div>
                <div className='right-side'>
                    <h2 className="mx-auto col-10 col-md-8 col-lg-6">
                        Update Your Review!
                    </h2>
                    <form className="mx-auto col-10 col-md-8 col-lg-6" onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Rating:</label>
                            <select className="form-select" type='text' onChange={e=>setRating(e.target.value)}>
                                <option value='1' selected={isSelected(1)}>⭐</option>
                                <option value='2' selected={isSelected(2)}>⭐⭐</option>
                                <option value='3' selected={isSelected(3)}>⭐⭐⭐</option>
                                <option value='4' selected={isSelected(4)}>⭐⭐⭐⭐</option>
                                <option value='5' selected={isSelected(5)}>⭐⭐⭐⭐⭐</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Review:</label>
                            <textarea className="form-control" type='text' value={review} onChange={e=>setReview(e.target.value)}/>
                        </div>
                        <input className='submit-button' type='submit' value='Submit Review'/>
                    </form>
                </div>
            </div>
        </div>
)}

export default UpdateReview