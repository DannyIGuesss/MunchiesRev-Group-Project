const Review = require('../models/review.model');
const jwt = require('jsonwebtoken')

module.exports = {
    postReview: async (req, res) => {
        try {
            const review = req.body
            console.log(req.cookies)
            const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
            const user_id = decodedJwt.payload._id
            const restaurant_id = req.params.id 
            const username = decodedJwt.payload.username
            const completedReview = {...review, user_id:user_id, username:username, restaurant_id:restaurant_id}
            console.log(completedReview)
            const newReview = await Review.create(completedReview)
            
            console.log(newReview);
            res.json(newReview)

        }
        catch(err) {
            res.status(400).json({error: err, message: "there was an error"})
        }

    // TODO: COMPLETE THIS PAGE 
    }
}