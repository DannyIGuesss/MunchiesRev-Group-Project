// TODO: complete this page
const RestaurantController = require('../controllers/restaurant.controller');
const {authenticate} = require('../config/jwt.config')

// * Add authenticate if needed

module.exports = app => {
    app.post('/api/postRestaurant', RestaurantController.newRestaurant)
}