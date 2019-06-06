var _= require("lodash");
var Event = require('../models/exam.model');
import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://flexionreportapi.azurewebsites.net/graphql',
});

 class ReportController {
  
    constructor() {  }

    getStudents() { 
      var students = async function(res) { 
       
          let results = null;
          await  client
          .query({
            query: gql`query
            {
              students
              {
                userId
                firstName
                lastName
                roleName
                userRoleId
              }
            }
            `,
          })
          .then(response => results = response);
             return results.data.students;
      }
      return students;
   }
  
   addReport()
   {
      var report = async function(args,res) { 
          var reportData = args.reportAdd;
          let results = null;
          await  client
          .mutate({
            mutation:gql`
            mutation addReport($reportAdd: AddReportInput!) {
               addReport(reportAdd: $reportAdd)
             }
            `,
            variables: {
               reportAdd: reportData,
            },
          })
          .then(response => results = response);
          console.log("No More PAin");
             return results.data.addReport;
      }
      return report;
   }
   getTeachers() { 
      var teachers = async function(res) { 
       
          let results = null;
          await  client
          .query({
            query: gql`query
            {
              teachers
              {
                  userId
                  firstName
                  lastName
                  roleName
                  userRoleId
              }
            }
            `,
          })
          .then(response => results = response);
             return results.data.teachers;
      }
      return teachers;
   }
   reportByExamID()
   {
      var reports = async function(args,res) { 
          var id = args.examID;
          let results = null;
          await  client
          .query({
            query: gql`
            query reportByExamID($examID: Int!) {
               reportByExamID(examID: $examID) {
                  examId
                  examDate 
                  studentResponse
                  studentID
                  studentName
                  isCorrect
                  inputUnitOfMeasure
                  inputValue
                  outPutUnitOfMeasure
              }
            }              
            `,
            variables: {
               examID: id,
            },
          })
          .then(response => {results = response},
            error=>{
                console.log(error);
            }
            );
             return results.data.reportByExamID;
      }
      return reports;
   }

   reportByUserID()
   {
      var reports = async function(args,res) { 
         console.log(args);
          var examid = args.examID;
          var userid = args.userID;
          let results = null;
          await  client
          .query({
            query: gql`
            query reportByUserID($examID: Int!, $userID: Int! ) {
               reportByUserID(examID: $examID, userID : $userID) {
                  examId
                  examDate 
                  studentResponse
                  studentID
                  studentName
                  isCorrect
                  inputUnitOfMeasure
                  inputValue
                  outPutUnitOfMeasure
              }
            }              
            `,
            variables: {
               examID: examid,
               userID:userid
            },
          })
          .then(response => {results = response},
            error=>{
                console.log(error);
            }
            );
             return results.data.reportByUserID;
      }
      return reports;
      
   }
  

 }



 

 let reportController = new ReportController();
 









module.exports = reportController;