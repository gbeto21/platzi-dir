'use strict'

const connectDB = require('./db')
const { ObjectID } = require('mongodb')

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
  Query: {

    getCourses: async () => {
      let db
      let courses = []

      try {
        db = await connectDB()
        courses = await db.collection('courses').find().toArray()

      } catch (error) {
        console.log(error);
      }

      return courses
    },
    getCourse: async (root, { id }) => {
      let db
      let course

      try {
        db = await connectDB()
        course = await db.collection('courses').findOne({ _id: ObjectID(id) })

      } catch (error) {
        console.log(error);
      }

      return course
    }
  }
}