const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const { connectDB } = require('./config/db')
const axios = require('axios')
const apiRoutes = require('./routes/userRoutes')

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.get('/', (req, res) => {

    res.send('<h1>Hello their</h1>')
})

app.use('/api', apiRoutes)

const PORT = process.env.PORT || 6001

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})

connectDB()