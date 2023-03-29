const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema ({
    review: {
        type: String
    },

    rating: {
        type: Number
    },

    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
        // refers back to our UserSchema
    },

    // makes it easier to view in the db who posted what
    username: {
        type: String
    },

    restaurant_id: {
        type: String,
        ref: 'Restaurant'
        // refers back to our RestaurantSchema
    }

}, {timestamps: true})

module.exports = mongoose.model("Reviews", ReviewSchema)