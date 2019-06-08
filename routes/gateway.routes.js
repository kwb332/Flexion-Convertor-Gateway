var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
var userController = require('../controllers/user.Controller');
var reportController = require('../controllers/report.Controller');
var examController = require('../controllers/exam.Controller');
var modelschema = require('../middlewares/graphql/gateway.schema/gateway.schemaGQL');

var root = {
    students: userController.getStudents(),
    studentByID: userController.getStudent(),
    teachers: userController.getTeachers(),
    teacherByID: userController.getTeacher(),
    addReport : reportController.addReport(),
    addReports : reportController.addReports(),
    reportByExamID: reportController.reportByExamID(),
    reportByUserID: reportController.reportByUserID(),
    addExam: examController.addExam(),
    addQuestion: examController.addQuestion(),
    addAnswer: examController.addAnswer(),
    submitToStudent: examController.submitExamToStudent(),
    submitToTeacher : examController.submitToTeacher(),
    exams : examController.getExams(),
    examByID: examController.examByID(),
    examByUserID: examController.examByUserID(),
    conversions : examController.getConversions(),
    conversionByID : examController.getConversionByID(),
    examQuestions : examController.examQuestionsByExamID()

  };

module.exports = root;