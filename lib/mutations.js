'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
    createCourse: async (root, { input }) => {
        const defaults = {
            teacher: '',
            topic: ''
        }
        const newCourse = Object.assign(defaults, input)
        let db
        let course
        try {
            db = await connectDb()
            course = await db.collection('courses').insertOne(newCourse)
            newCourse._id = course.insertedId
        } catch (error) {
            console.log(error);

        }
        return newCourse
    },
    createStudent: async (root, { input }) => {

        let db
        let student
        try {
            db = await connectDb()
            student = await db.collection('students').insertOne(input)
            input._id = student.insertedId
        } catch (error) {
            console.log(error);

        }
        return input
    },
    editCourse: async (root, { _id, input }) => {
        let db
        let course
        try {
            db = await connectDb()
            await db.collection('courses').updateOne(
                { _id: ObjectID(_id) },
                { $set: input }
            )
            course = await db.collection('courses').findOne({ _id: ObjectID(_id) }
            )
        } catch (error) {
            console.log(error);
        }
        return course
    },
    editStudent: async (root, { _id, input }) => {
        let db
        let student
        try {
            db = await connectDb()
            await db.collection('students').updateOne(
                { _id: ObjectID(_id) },
                { $set: input }
            )
            student = await db.collection('students').findOne({ _id: ObjectID(_id) }
            )
        } catch (error) {
            console.log(error);
        }
        return student
    },
    deleteItem: async (root, { _id, collection }) => {
        let db
        try {
            db = await connectDb()
            await db.collection(collection).deleteOne(
                { _id: ObjectID(_id) }
            )
            return 'Elemento eliminado'
        }
        catch (error) {
            console.log(error);
            return error
        }
    },
    addPeople: async (root, { courseID, personID }) => {
        let db
        let person
        let course

        try {
            db = await connectDb()
            course = await db.collection('courses').findOne({
                _id: ObjectID(courseID)
            })
            person = await db.collection('students').findOne({
                _id: ObjectID(personID)
            })

            if (!course || !person) throw new Error('La persona o el curso no existe')
            await db.collection('courses').updateOne(
                { _id: ObjectID(courseID) },
                { $addToSet: { people: ObjectID(personID) } }
            )
        }
        catch (error) {
            console.log(error);
        }
        return course
    }
}