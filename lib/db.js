'use strict'

const { MongoClient } = require('mongodb')
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env

//mongodb+srv://platzi-admin:platzi-admin02@platzi-curso-xuzor.mongodb.net/test?retryWrites=true&w=majority
//mongodb+srv://platzi-admin:platzi-admin02@platzi-curso-xuzor.mongodb.net
//`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:/${DB_NAME}`

const mongoUrl = 'mongodb+srv://platzi-admin:platzi-admin02@platzi-curso-xuzor.mongodb.net/test?retryWrites=true&w=majority'
let connection

async function connectDB() {
    if (connection)
        return connection

    let client
    try {
        client = await MongoClient.connect(mongoUrl, {
            useNewUrlParser: true
        })

        connection = client.db(DB_NAME)
        console.log('Conexión exitosa.');
        
    } catch (error) {
        console.error('Could not connect to db', mongoUrl, error)
        process.exit(1)
    }

    return connection
}

module.exports = connectDB