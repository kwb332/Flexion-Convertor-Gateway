var { buildSchema } = require('graphql');

var schema = buildSchema(`
type Query {
    studentByID(userID: Int!): StudentType
    students : [StudentType]
    teacherByID(userID: Int!): TeacherType
    teachers : [TeacherType]
    reportByExamID(examID:Int!): [ReportType]
    reportByUserID(examID:Int!, userID:Int!): [ReportType]
    exams:[ExamType]
    examByID(examID: Int!) : ExamType
    examByUserID(userID: Int!) : [ExamType]
    conversions : [ConvertionType]
    conversionByID(conversionID : Int!) : ConvertionType
    examQuestions(examID : Int!) : [ExamQuestionType]
},
type ConvertionType{
    conversionId : Int
    conversionValue : Float
    conversionName : String
    conversionTypeId : Int
    conversionTypeName: String
},

type ExamQuestionType
{
    answer : String
    examQuestionId : Int
    description : String
    inputValue : Float
    sourceConversionID : Int
    sourceConversionName : String
    destinationConversionID : Int
    destinationConversionName : String
    examId : Int
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
type ExamType {
    dateCompleted : String
    dateCreated : String
    description : String
    examId : Int
    isComplete : Boolean
    isCreated : Boolean
    isGraded : Boolean
    studentId : Int
    teacherId : Int
},

input AddExamQuestionInput{
    examID: Int
    sourceConversionId: Int
    inputValue: Float
    destinationConversionId: Int
},

input ExamInput{
      examId : Int
      description: String
      examDate: String
      studentId: Int
      isComplete : Boolean
      isGraded: Boolean
      isCreated: Boolean
      teacherId: Int 
      dateCreated: String
    
},
input AddExamAnswerInput{
    examQuestionId: Int
    answer : Float
}

type Mutation {
    addReport(reportAdd: ReportInput!): Boolean
    addExam(examAdd: ExamInput!) : Boolean
    addQuestion(questionAdd: AddExamQuestionInput!) : Boolean
    addAnswer(answerAdd: AddExamAnswerInput!) : Boolean
    submitToStudent(submitStudent: ExamInput!) :Boolean
    submitToTeacher(submitTeacher:ExamInput!) : [ReportType] 
}
`);
module.exports = schema;

