'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')
const app = express()
const port = process.env.port || 3000

//Definir esquema
const schema = buildSchema(`type Query{
    hello: String
}`)

//Configurar resolvers
const resolvers = {
    hello: () => {
        return 'Hola mundo'
    }
}

// // Ejectuar query en termial
// graphql(schema, '{saludo,hello}', resolvers).then((data) => {
//     console.log(data);

// })

app.use('/api', gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/api`);

})
