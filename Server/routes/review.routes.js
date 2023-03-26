const ReviewController = require('../controllers/review.controller');
// TODO: add authenticate once jwt.config file is up

module.exports = app => {
    app.post('/api/postReview', ReviewController.postReview)
}