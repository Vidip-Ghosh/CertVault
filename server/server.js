const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path")
const app = express();


app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json())
dotenv.config();


mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('Connected to database');
}).catch((e)=>{
    console.error(`Error connecting to the db ${e}`);
})

// Import Routes
const authRoute = require('./routes/index');

// Route Middlewares
app.use('/auth', authRoute);
app.get('/node-version', (req, res) => {
    res.send(process.version);
  });
  

const port = process.env.port ||  3000;
app.listen(port, function(){console.log("Server running on localhost:" + port)});
