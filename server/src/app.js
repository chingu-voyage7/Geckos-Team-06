const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const router = express.Router()

// database configuration
// ex:
// const url = "mongodb://localhost:27017/name-database"

// require models
// const nameModel = require('./models/nameModel')

// require routes
// const nameRoute = require('./routes/nameRoute)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static(path.join(__dirname, "../../build")))

//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
})


// routes configurations
// app.use('/route', functionRoute)


module.exports = app