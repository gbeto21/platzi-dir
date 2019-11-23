'use strict'

const { MongoClient } = require('mongo')
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env

//mongodb+srv://platzi-admin:platzi-admin02@platzi-curso-xuzor.mongodb.net
const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
let connection

async funtion connectDB(){
    if (connection)
        return connection

    let client
    try {
        client = await MongoClient.connect(mongoUrl, {
            useNewUrlParser: true
        })

        connection = client.db(DB_NAME)

    } catch (error) {
        console.error('Could not connect to db', mongoUrl, error)
        process.exit(1)
    }

    return connection
}

module.exports = connectDB