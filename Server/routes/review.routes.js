const ReviewController = require('../controllers/review.controller');
// const {authenticate} = require('../config/jwt.config')

module.exports = app => {
    app.post('/api/postReview/:id', ReviewController.postReview)
    app.get('/api/getOne/:id', ReviewController.getOneReview)
    app.put('/api/update/:id', ReviewController.updateReview)
    app.delete('/api/delete/:id', ReviewController.deleteReview)
    app.get('/api/allreviews', ReviewController.allReviews)
}