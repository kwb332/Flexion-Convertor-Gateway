var _= require("lodash");

import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://flexiontestapi.azurewebsites.net/graphql',
});


 class ExamController {
    // class methods
    constructor() {  }

     
   addExam()
   {
      var exam = async function(args,res) { 
          var examData = args.examAdd;
          let results = null;
          await  client
          .mutate({
            fetchPolicy: 'no-cache',
            mutation:gql`
            mutation addExam($examAdd: ExamInput!) {
               addExam(examAdd: $examAdd)
             }
            `,
            variables: {
               examAdd: examData,
            },
          })
          .then(response => results = response);
             return results.data.addExam;
      }
      return exam;
   }

   addQuestion()
   {
      var question = async function(args,res) { 
          var questionData = args.questionAdd;
          let results = null;
          await  client
          .mutate({
            fetchPolicy: 'no-cache',
            mutation:gql`
            mutation addQuestion($questionAdd: AddExamQuestionInput!) {
               addQuestion(questionAdd: $questionAdd)
             }             
            `,
            variables: {
               questionAdd: questionData,
            },
          })
          .then(response => results = response);
             return results.data.addQuestion;
      }
      return question;
   }
   addAnswer()
   {
      var answer = async function(args,res) { 
          var answerData = args.answerAdd;
          let results = null;
          await  client
          .mutate({
            fetchPolicy: 'no-cache',
            mutation:gql`
            mutation addAnswer($answerAdd: AddExamAnswerInput!) {
               addAnswer(answerAdd: $answerAdd)
             }       
            `,
            variables: {
               answerAdd: answerData,
            },
          })
          .then(response => results = response);
             return results.data.addAnswer;
      }
      return answer;
   }
   submitExamToStudent()
   {
      var submit = async function(args,res) { 
          var examData = args.submitStudent;
          let results = null;
          await  client
          .mutate({
            fetchPolicy: 'no-cache',
            mutation:gql`
            mutation submitExamToStudent($submitStudent: ExamInput!) {
               submitToStudent(submitStudent: $submitStudent)
             }    
            `,
            variables: {
               submitStudent: examData,
            },
          })
          .then(response => results = response);
             return results.data.submitToStudent;
      }
      return submit;
   }
   submitToTeacher()
   {
      var submit = async function(args,res) { 
          var examData = args.submitTeacher;
          console.log(examData);
          let results = null;
          await  client
          .mutate({
            fetchPolicy: 'no-cache',
            mutation:gql`
            mutation submitToTeacher($submitTeacher: ExamInput!) {
               submitToTeacher(submitTeacher: $submitTeacher) {
                 examDate
                 examId
                 inputUnitOfMeasure
                 inputValue
                 isCorrect
                 outPutUnitOfMeasure
                 studentName
                 teacherName
                 studentResponse
               }
             }             
            `,
            variables: {
               submitTeacher: examData,
            },
          })
          .then(response => results = response);
             return results.data.submitToTeacher;
      }
      return submit;
   }

   getExams() { 
      var exams = async function(res) { 
       
          let results = null;
          await  client
          .query({
      
            fetchPolicy: 'network-only',
            query: gql` query
            {
              exams {
                dateCompleted
                dateCreated
                description
                examId
                isComplete
                isCreated
                isGraded
                studentId
                teacherId
              }
            }
            `,
          })
          .then(response => results = response);
             return results.data.exams;
      }
      return exams;
   }
    
   examByID()
   {
     
      var exam = async function(args,res) { 
          var id = args.examID;
          console.log(id);
          let results = null;
          await  client
          .query({
            fetchPolicy: 'network-only',
            query: gql`
            query examByID($examID: Int!) {
               examByID(examID: $examID) {
                 dateCompleted
                 dateCreated
                 description
                 examId
                 isComplete
                 isCreated
                 isGraded
                 studentId
                 teacherId
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
             return results.data.examByID;
      }
      return exam;
   }

   examByUserID()
   {
     
      var exams = async function(args,res) { 
          var id = args.userID;
          let results = null;
          await  client
          .query({
            fetchPolicy: 'network-only',
            query: gql`
            query examByUserID($userID: Int!) {
               examByUserID(userID: $userID) {
                 dateCompleted
                 dateCreated
                 description
                 examId
                 isComplete
                 isCreated
                 isGraded
                 studentId
                 teacherId
               }
             }
                   
            `,
            variables: {
               userID: id,
            },
          })
          .then(response => {results = response},
            error=>{
                console.log(error);
            }
            );
             return results.data.examByUserID;
      }
      return exams;
   }
   examByTeacherID()
   {
     
      var exams = async function(args,res) { 
          var id = args.teacherID;
          console.log(id);
          let results = null;
          await  client
          .query({
            fetchPolicy: 'network-only',
            query: gql`
            query examByTeacherID($teacherID: Int!) {
               examByTeacherID(teacherID: $teacherID) {
                 dateCompleted
                 dateCreated
                 description
                 examId
                 isComplete
                 isCreated
                 isGraded
                 studentId
                 teacherId
               }
             }
                   
            `,
            variables: {
               teacherID: id,
            },
          })
          .then(response => {results = response},
            error=>{
                console.log(error);
            }
            );
             return results.data.examByTeacherID;
      }
      return exams;
   }

   getConversions() { 
      var conversions = async function(res) { 
       
          let results = null;
          await  client
          .query({
            fetchPolicy: 'network-only',
            query: gql`query
            {
              conversions {
                conversionId
                conversionValue
                conversionName
                conversionTypeId
                conversionTypeName
                
              }
            }
            `,
          })
          .then(response => results = response);
             return results.data.conversions;
      }
      return conversions;
   }
   getConversionByID()
   {
      var conversion = async function(args,res) { 
         console.log(args);
          var conversionId = args.conversionID;
         
          let results = null;
          await  client
          .query({
            fetchPolicy: 'network-only',
            query: gql`
            query conversionByID($conversionID: Int!) {
               conversionByID(conversionID: $conversionID) {
                  conversionId
                  conversionValue
                  conversionName
                  conversionTypeId
                  conversionTypeName
              
              }
            }              
            `,
            variables: {
               conversionID: conversionId
              
            },
          })
          .then(response => {results = response},
            error=>{
                console.log(error);
            }
            );
             return results.data.conversionByID;
      }
      return conversion;
      
   }

   examQuestionsByExamID()
   {
      var questions = async function(args,res) { 
         console.log(args);
          var id = args.examID;
         
          let results = null;
          await  client
          .query({
            fetchPolicy: 'network-only',
            query: gql`
            query examQuestions($examID: Int!) {
               examQuestions(examID: $examID) {
                  answer
                  examQuestionId
                  description
                  inputValue
                  sourceConversionID
                  sourceConversionName
                  destinationConversionID
                  destinationConversionName
                  examId
              }
            }              
            `,
            variables: {
               examID: id
              
            },
          })
          .then(response => {results = response},
            error=>{
                console.log(error);
            }
            );
             return results.data.examQuestions;
      }
      return questions;
      
   }
   
 }




 let examController = new ExamController();
 









module.exports = examController;