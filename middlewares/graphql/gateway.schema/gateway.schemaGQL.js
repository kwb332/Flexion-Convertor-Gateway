var { buildSchema } = require('graphql');

var schema = buildSchema(`
type Query {
    studentByID(userID: String!): StudentType
    students : [StudentType]
    teacherByID(userID: String!): TeacherType
    teachers : [TeacherType]
},

type StudentType {
    userId: String
    firstName: String
    lastName: String
    roleName: String
    userRoleId: String
},
type TeacherType {
    userId: String
    firstName: String
    lastName: String
    roleName: String
    userRoleId: String
}
`);
module.exports = schema;

/*
type Query {
    studentByID(userID: String!): StudentType
    students : [StudentType]
},

input EventInput {
    title: String
    poster: String
    type: String
    description: String
    street: String
    state: String
    primaryColor: String,
    secondaryColor: String,
    startDate: String
    endDate: String
},
input EventUpdateInput {
    _id: String
    title: String
    poster: String
    type: String
    description: String
    street: String
    state: String
    primaryColor: String,
    secondaryColor: String,
    startDate: String
    endDate: String
},
type StudentType {
    userId: String
    firstName: String
    lastName: String
    roleName: String
    userRoleId: String
},
type Mutation {
    updateEvent(updateEvent: EventUpdateInput!): Event
    addEvent(newEvent : EventInput!): Boolean
    deleteEvent(_id : String!) : Boolean
}*/