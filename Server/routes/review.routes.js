// TODO: 
const ReviewController = require('../controllers/review.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = app => {
    app.post('/api/postReview/:id', ReviewController.postReview)
}