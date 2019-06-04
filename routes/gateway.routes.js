var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
var userController = require('../controllers/user.Controller');
var modelschema = require('../middlewares/graphql/gateway.schema/gateway.schemaGQL');

var root = {
    students: userController.getStudents(),
    studentByID: userController.getStudent(),
    teachers: userController.getTeachers(),
    teacherByID: userController.getTeacher()
  
  };

module.exports = root;