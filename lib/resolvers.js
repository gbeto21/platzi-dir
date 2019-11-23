'use strict'

const bdCursos = [
  {
    _id: 'unId',
    title: 'String',
    teacher: 'String',
    descripion: 'String',
    topic: 'String'
  },
  {
    _id: 'unId',
    title: 'String 2',
    teacher: 'String 2',
    descripion: 'String 2',
    topic: 'String 2'
  }
]

module.exports = {
  getCourses: () => {
    return bdCursos
  }
}