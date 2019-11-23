'use strict'

const { graphql, buildSchema } = require('graphql')

//Definir esquema
const schema = buildSchema(`type Query{
    hello: String
    saludo: String
}`)

//Configurar resolvers
const resolvers = {
    hello: () => {
        return 'Hola mundo'
    },
    saludo: () => {
        return 'Saludo'
    }
}

// Ejectuar query
graphql(schema, '{saludo}', resolvers).then((data) => {
    console.log(data);

})

