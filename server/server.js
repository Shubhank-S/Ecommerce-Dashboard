const express = require('express');
const connectDB = require('./config/db');
const userModel = require('./models/userModel');

const app = express();
PORT= 8080;


// Database Configuration

connectDB();

// Middleware

app.use(express.json())

// REGISTER||Signup API

app.post('/register',async(req,resp)=>{
    const user = new userModel(req.body)
    const result = await user.save();
    resp.send(result)
})



app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT}`)
})  