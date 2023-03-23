const express = require("express");
const app = express();
const cors = require('cors') 
const cookieParser = require('cookie-parser')
require("./config/mongoose.config");
require('dotenv').config();
app.use(cookieParser())
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(express.json(), express.urlencoded({ extended: true }));

//require routes to be added here when routes are ready
require('./routes/users.routes')(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));