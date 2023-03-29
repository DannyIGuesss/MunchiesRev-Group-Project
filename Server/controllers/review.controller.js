const Review = require('../models/review.model');
const jwt = require('jsonwebtoken')

module.exports = {
    //CREATE
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
            res.status(400).json(err)
        }
    },

    //READ
    getOneReview: async (req, res) => {
        try {
            const review_id = req.params.id
            const oneReview = await Review.findById(review_id)
            const allReviewsOnOneRestaurant = await Review.find({review_id:review_id})
            res.json({oneReview:oneReview, allReviewsOnOneRestaurant:allReviewsOnOneRestaurant})
        }
        catch(err) {
            res.status(500).json(err)
        }
    },

    //UPDATE
    updateReview: async (req, res) => {
        try {
            const update = await Review.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true, runValidators: true } )
            res.json(update)
        }
        catch(err) {
            res.status(500).json(err)
        }
    },

    //DELETE
    deleteReview: async (req, res) => {
        try {
            const deleteOne = await Review.deleteOne({_id: req.params.id})
            res.json(deleteOne)
        }
        catch(err) {
            res.status(500).json(err)
        }
    },

    //ALL REVIEWS
    allReviews: async (req, res) => {
        try{
            const all = await Review.find()
            res.json(all)
        }
        catch(err) {
            res.status(500).json(err)
        }
    }
}