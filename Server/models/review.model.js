const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema ({

    review: {
        type: String
    },

    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },

    username: {
        type: String
    },

    restaurant_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Restaurant'
    }

}, {timestamps: true})

module.exports = mongoose.model("Reviews", ReviewSchema)