import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom';
import { LoggedUserContext } from '../context/loggedUserContext'
import ('../cssFiles/cards.module.css')

const SeeReviews= () => {
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate()
    const {loggedUser, setLoggedUser} = useContext(LoggedUserContext)
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
        
        <div className='p-4'>
            <nav>
                <h1>MunchiesRev</h1>
                
                <div className='nav-btn'>
                    <button><Link to={'/Restaurants'}>Restaurant</Link></button>
                    {
                    !loggedUser._id ? 
                    <button><Link to={'/login'}>Login</Link></button> 
                    : 
                    <button onClick={logout}>Logout</button>
                    }
                </div>
                
            </nav>
            {console.log(reviews)}

            <div className='d-flex flex-wrap justify-content-around main-body'>

            {
                reviews.map((eachReview,index) => (
                    <div className='p-3 m-3 w-25 review text-center' key={index} >
                        <p>Restaurant: {eachReview.restaurant_id}</p> 
                        <p>Review: {eachReview.review}</p>
                        <p>Rating: {countStars(eachReview.rating) } </p>
                        <p>Posted By: {eachReview.username}</p>
                        {
                            loggedUser._id === eachReview.user_id?
                            <Link className="btn btn-info mt-3" to={`/UpdateReview/${eachReview._id}`}>Update</Link>
                            :
                            null
                        }
                        <hr/>
                        {
                            loggedUser._id === eachReview.user_id?
                            <button className="btn btn-danger" onClick={e=>handleDelete(eachReview._id)}>Delete</button>
                            :
                            null
                        }
                    </div>
                ))   
            }
            </div>
            {/* <p>Restaurant: {eachReview.restaurantName}</p> */}
        </div>
    )
}

export default SeeReviews;