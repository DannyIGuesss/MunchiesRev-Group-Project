// TODO: need to complete this before setting up many-to-many relationship for the BE
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET_KEY

modules.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookie.userToken, SECRET, (err, payload) => {
        if(err){
            res.status(401).json({verified:false})
        }
        else{
            console.log('Authenticated');
            req.user = payload
            console.log('PAYLOAD', payload);
            next();
        }
    })
}