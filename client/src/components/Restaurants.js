// *****Dashboard to see all restraunts*****

import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { LoggedUserContext } from '../context/loggedUserContext'
import { RestaurantsContext } from '../context/restaurantContext';
import axios from 'axios';
import ('../cssFiles/navBar.css')
import ('../cssFiles/restaurant.css')

const Restaurants = (props) => {
    const { restaurants, SetRestaurants} = useContext(RestaurantsContext)
    const {loggedUser, setLoggedUser} = useContext(LoggedUserContext)
    const navigate = useNavigate();


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
        <div className='html'>
            <nav>
                <h1>MunchiesRev</h1>
                <div className='nav-btn'>
                    {!loggedUser._id ? <button><Link to={'/login'}>Login</Link></button> : <button onClick={logout}>Logout</button>}
                </div>
            </nav>
            <main className='main'>
                <div className='body-container'>

                    {
                        restaurants.map((shop, index) => {
                            return(
                                <div className='img-container' key={index}>
                                    <h3>{shop}</h3>
                                    <img className='imgTag' src={require(`../images/${shop}.jpeg`)} alt={'hi'}/>
                                </div>
                            )
                        })
                    }
                </div>
                    <button><Link to={'/SeeReviews'}>See Reviews</Link></button> 
                    {loggedUser._id ? <button><Link to={'/createReview'}>Create a Review</Link></button> : <h1>You need to login...</h1>}
            </main>

        </div>
)}

export default Restaurants;