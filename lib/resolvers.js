'use strict'

const queries = require('./queries')
const mutations = require('./mutations')
const types = require('./types')

const bdCursos = [
  {
    title: 'String',
    teacher: 'String',
    descripion: 'String',
    topic: 'String'
  },
  {
    title: 'String 2',
    teacher: 'String 2',
    descripion: 'String 2',
    topic: 'String 2'
  }
]

module.exports = {
  Query: queries,
  Mutation: mutations,
  ...types
}