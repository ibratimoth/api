const {Sequelize} = require('sequelize')

const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize('api', 'postgres', process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres'
})

const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully')
        await sequelize.sync({alter: true})
        console.log('Dtabase synced')
    } catch (error) {
        console.error('Unable to connect to the database', error)
    }
}

module.exports = {sequelize, connectDB}