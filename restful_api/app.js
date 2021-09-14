const express = require('express'); //  database
const app = express(); 
const mongoose = require('mongoose'); // for connectivity with database
require('dotenv/config'); // for hiding database username and password
const postsRoute = require('./rotes/posts');   // file impoting
const bodyParser = require('body-parser');  // parse the file into json format


//Middlewares
app.use(express.urlencoded({
    extended:true,
}));
app.use(express.json());

// app.use(auth); for checking wether the user is authentic or not

app.use('/',postsRoute);

// connect to db
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to db');
});

app.listen(3000);