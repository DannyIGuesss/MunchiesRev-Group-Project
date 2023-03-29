import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const ShowYourReviewForm = ({ arr, setArr, old, submit, user }) => {
    // change header if name
    //if (user.first) setTitle(`${user.first[0].toUpperCase()+user.first.slice(1)}'s World`)
    // declare variables
    const [item, setItem] = useState({ 
        review: '', 
        rating:'' 
    }
    )
    const [arr, setArr] = useState([])
    // get all per user
    useEffect(() => {
        axios.get('http://localhost:8000/api/movies/user', {withCredentials:true})
            .then(res => { console.log(res.data); setArr(res.data) })
            .catch(err => console.log("getall error: " + err))
    }, [])
    // delete
    const handleDelete = (event, id) => {
        event.preventDefault()
        axios.delete(`http://localhost:8000/api/movie/${id}`)
        .then(res => {
            console.log('worked ', res.data)
            setArr(arr.filter(e=>e._id !== id))} )
        .catch(res=> console.log("couldnt delete") )
    }
    return (

        <form onSubmit={handleEdit}>
            {/* success */}
            {
                success?
                <p className='text-danger'>Success</p>
                :
                null
            }
            {/* review */}
            <h2>{setArr.restaurantName}</h2>
            <label>
                {
                    // NAME
                    errors.review && 
                    <>
                    <span className="accent">
                        {errors.review.message}
                    </span>
                    <br/>
                    </>
                }
                Review:
                <input type="text" value={item.review} onChange={e => setItem({...item, review: e.target.value})} />
            </label>
            <label>
                {
                    errors.rating && 
                    <>
                    <span className="accent">
                        {errors.rating.message}
                    </span>
                    <br/>
                    </>
                }
                Rating:
                <input type="text" value={item.rating} onChange={e => setItem({...item, rating: e.target.value})} />
            </label>

            <input type="submit" value={submit || "Create Movie"} />
        </form>
    )
}

export default ShowYourReviewForm;