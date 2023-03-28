const Review = require('../models/review.model');
const jwt = require('jsonwebtoken')

module.exports = {
    postReview: async (req, res) => {
        try {
            const review = req.body
            const user_id = decodedJwt.payload._id
            const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
            const restaurant_id = req.params.id 
            const username = decodedJwt.payload._id
            const completedReview = {...review, user_id:user_id, username:username, restaurant_id:restaurant_id}
            const newReview = await Review.create(completedReview)
            res.json(newReview)
        }
        catch(err) {
            res.status(400).json({error: err})
        }
    }
}