const ReviewController = require('../controllers/review.controller');
const {authenticate} = require('../config/jwt.config')
// TODO: 

module.exports = app => {
    app.post('/api/postReview/:id', authenticate, ReviewController.postReview)
}