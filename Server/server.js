const express = require("express");
const app = express();
const cors = require('cors') 
const cookieParser = require('cookie-parser')
require("./config/mongoose");
require('dotenv').config();
app.use(cookieParser())
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(express.json(), express.urlencoded({ extended: true }));
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));