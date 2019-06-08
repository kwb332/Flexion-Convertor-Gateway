var _= require("lodash");

import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://flexionreportapi.azurewebsites.net/graphql',
});

const userclient = new ApolloClient({
   uri: 'http://flexionuserapi.azurewebsites.net/graphql',
 });

 class ReportController {
  
    constructor() {  }

 
  
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
             return results.data.addReport;
      }
      return report;
   }

   addReports()
   {
      var reports = async function(args,res) { 
          var reportData = args.reportAdd;
          console.log(reportData);
          let results = null;
          await  client
          .mutate({
            mutation:gql`
            mutation addReports($reportAdd: [AddReportInput]!) {
               addReports(reportAdd: $reportAdd)
             }
            `,
            variables: {
               reportAdd: reportData,
            },
          })
          .then(response => results = response);
         
             return results.data.addReports;
      }
      return reports;
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