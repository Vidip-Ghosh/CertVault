const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const collection = require('./db/db')
const PORT = process.env.PORT

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello from the server');
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})