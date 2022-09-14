require('dotenv').config();


const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');

require('./config/db.config');


const app = express();


app.use(cors()); 
app.use(express.json());


/**
 * Port we are going to use
 */
 const port = Number(process.env.PORT || 3000);
 app.listen(port, async() => {
     console.log(`Ey! Your port ${port} is now available!`);
 });
 