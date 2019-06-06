var { buildSchema } = require('graphql');

var schema = buildSchema(`
type Query {
    studentByID(userID: Int!): StudentType
    students : [StudentType]
    teacherByID(userID: Int!): TeacherType
    teachers : [TeacherType]
    reportByExamID(examID:Int!): [ReportType]
    reportByUserID(examID:Int!, userID:Int!): [ReportType]
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
},
type ReportType {
    examId: Int
    examDescription: String
    examDate: String
    inputValue: Float
    teacherName:String  
    studentID: Int
    studentName: String
    studentResponse:Float
    isCorrect: Boolean
    inputUnitOfMeasure: String 
    outPutUnitOfMeasure: String

},

input ReportInput{
    examID: Int
    examDate: String
    inputValue: Float
    teacherName:String  
    studentID: Int
    studentName: String
    studentResponse:Float
    isCorrect: Boolean
    examDescription: String 
    inputUnitOfMeasure: String 
    outPutUnitOfMeasure: String

},


type Mutation {
    addReport(reportAdd: ReportInput!): Boolean
   
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