const User = require('../models/user.model');
const secret = "secret"; // will need to change this later to be a .env file
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
module.exports = {

    registerUser: async (req, res) => {
        try {
            console.log("registerUser")//test
            // Check if the email that was entered in the reg form is already in the DB
            const potentialUser = await User.findOne({ email: req.body.email });
            if (potentialUser) {
                console.log("potentialUser")//test
                res.status(400).json({ message: {email: {message:'Email in use'}} })
            } else {
                console.log("else")//test
                // Create the user
                const newUser = await User.create(req.body);
                // * jwt.sign creates the token the first thing we pass is what we want to serialize (payload)
                // * the second param is a secret key to serialize 
                const userToken = jwt.sign({ _id: newUser._id, email: newUser.email }, secret, { expiresIn: '2h' })
                console.log(userToken);
                // Sending back the logged in user 
                res.status(201).cookie('userToken', userToken, { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 }).cookie('userId', newUser._id.toString()).json({ message: 'User logged in', user: newUser })
                //later we will come back and edit the json response to not send back the whole user for security/privacy reasons
            }
        }
        catch (err) {
            console.log(err);
            res.status(400).json(err)
        }
    },
    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                // console.log('HERE1');
                // if the user exists we want to check the password with what is stored in the db under that email 
                const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
                console.log(passwordsMatch);
                if (passwordsMatch) {
                    // console.log('HERE2');
                    const userToken = jwt.sign({ _id: user._id, email: user.email }, secret, { expiresIn: '2h' })
                    console.log(userToken);
                    // Sending back the logged in user 
                    res.cookie('userToken', userToken, { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 }).cookie('userId', user._id.toString()).status(201).json({ message: 'User logged in', user: user })
                } else {
                    res.status(400).json({ message: 'Invalid Email/Password' })
                }
            }
            else {
                res.status(400).json({ message: 'Invalid Email/Password' })
            }
        }
        catch (err) {
            res.status(400).json({ error: err })
        }
    },
    logout: (req, res) => {
        res.clearCookie('userId').clearCookie('userToken').json({message:'User is logged out, UserID and UserToken cleared from Cookies'})
    }

}