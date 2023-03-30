import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
const SeeReviews= () => {
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8000/api/allreviews', {withCredentials:true})
            .then((allReviews) => {
                console.log(allReviews.data)
                //console.log(allAlbums);//this is to test it in console
                setReviews(allReviews.data)
                console.log(reviews)
            })
            .catch((err) => {
                console.log(err);//this sends an error to the console
                setReviews([])
                navigate('/')
            })
    },[])
    const handleDelete = (id) => {
        
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then(res => {
            console.log(id)
            navigate('/Restaurants')
        })
        .catch(res=> console.log("couldnt delete") )
    }
    const countStars = (numberStars) => {
        let stars = ''
        for (let i = 0; i < numberStars; i++) {
            stars += '⭐'
        }
        return stars
    }

    return (
        
        <div className='p-4'>
            {console.log(reviews)}
            <h2 className='mb-5'>Check Out Our Collection</h2>
            <div className='d-flex flex-wrap justify-content-around'>
            {
                reviews.map((eachReview,index) => (
                    <div className='p-3 m-3 w-25' key={index} >
                        <p>Restaurant: {eachReview.restaurant_id}</p> 
                        <p>Review: {eachReview.review}</p>
                        <p>Rating: {countStars(eachReview.rating) } </p>
                        <p>Posted By: {eachReview.username}</p>
                        
                        <button><Link to={`/UpdateReview/${eachReview._id}`}>Update</Link></button>
                        <button onClick={e=>handleDelete(eachReview._id)}>Delete</button>
                    </div>
                ))   
            }
            </div>
            {/* <p>Restaurant: {eachReview.restaurantName}</p> */}
        </div>
    )
}

export default SeeReviews;