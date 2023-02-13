const express = require('express')
const router = require('./routes/product')
require('dotenv').config()
const productRouter = require('./routes/product')
const categoryRouter = require('./routes/category')
const mongoose = require('mongoose')

// Connect to mongodb Database
mongoose.connect('mongodb://localhost:27017/crud', (err)=>{
    if(!err){
        console.log('Database is connected successfully');
    }
})

// Port declaration through dotenv
PORT = process.env.PORT || 3000

//initialize express 
const app = express()

// Router for body parser 
app.use(express.json())

// Route for products
app.use('/api/products', productRouter)

// Route for Category
app.use('/api/category', categoryRouter)

// listning request on define port
app.listen(PORT, ()=>{
    console.log(`Server is Running on http://localhost:${PORT}`);
})