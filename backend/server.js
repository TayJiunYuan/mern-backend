//server.js is our entry point as stated in package.json
//dotenv allows you to read straight from the env file
//classic setup
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorHandler')
const connectDB = require('./config/db')
const colors = require('colors')
const port = process.env.PORT 

connectDB()

const app = express()


//middleware to convert req.body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//redirect requests to ./routes/goalRoutes
app.use('/api/goals', require('./routes/goalRoutes'))
//middleware to use our error handler instead of express' default error handler
app.use(errorHandler)


app.listen(port, ()=> console.log(`Server started on port ${port}`))

