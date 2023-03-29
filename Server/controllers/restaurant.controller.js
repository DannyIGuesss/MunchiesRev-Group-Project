// ! DO NOT TOUCH FILE 
// const Review = require('../models/review.model')
// const Restaurant = require('../models/restaurant.model');
// const jwt = require('jsonwebtoken')

// module.exports = {
//     newRestaurant: async (req, res) => {
//         try {
//             const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
//             const user_id = decodedJwt.payload._id 
//             const restaurant = req.body
//             restaurant['user_id'] = user_id
//             const finishedRestaurant = await Restaurant.create(restaurant)
//             res.json(finishedRestaurant)
//         }
//         catch(err) {
//             res.status(500).json(err)
//         }

//     }
// }