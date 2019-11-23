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
    _id: 'unId2',
    title: 'String 2',
    teacher: 'String 2',
    descripion: 'String 2',
    topic: 'String 2'
  }
]

module.exports = {
  Query: {

    getCourses: () => {
      return bdCursos
    },
    getCourse: (root, args) => {
      const course = bdCursos.filter(course => course._id === args.id)
      return course.pop()
    }
  }
}