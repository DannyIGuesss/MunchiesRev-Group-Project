// TODO: Complete this page
const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema ({

    restaurant: {
        type: String
    },

    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

}, {timestamps: true})

module.exports = mongoose.model("Restaurant", RestaurantSchema)