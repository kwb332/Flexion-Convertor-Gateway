var _= require("lodash");
import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://flexionuserapi.azurewebsites.net/graphql',
});

 class UserController {
   
    constructor() {  }
 
     getStudents() { 
        var students = async function(res) { 
         
            let results = null;
            await  client
            .query({
              fetchPolicy: 'network-only',
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
    
     getStudent()
     {
        var student = async function(args,res) { 
            var id = args.userID;
            let results = null;
            await  client
            .query({
              fetchPolicy: 'network-only',
              query: gql`
              query studentByID($userID: Int!) {
                studentByID(userID: $userID) {
                  userId
                  firstName
                  lastName
                  roleName
                  userRoleId
                }
              }              
              `,
              variables: {
                userID: id,
              },
            })
            .then(response => results = response);
               return results.data.studentByID;
        }
        return student;
     }
     getTeachers() { 
        var teachers = async function(res) { 
         
            let results = null;
            await  client
            .query({
              fetchPolicy: 'network-only',
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
     getTeacher()
     {
        var teacher = async function(args,res) { 
            var id = args.userID;
            let results = null;
            await  client
            .query({
              fetchPolicy: 'network-only',
              query: gql`
              query teacherByID($userID: Int!) {
                teacherByID(userID: $userID) {
                  userId
                  firstName
                  lastName
                  roleName
                  userRoleId
                }
              }              
              `,
              variables: {
                userID: id,
              },
            })
            .then(response => results = response);
               return results.data.teacherByID;
        }
        return teacher;
     }
  
   
 }

 let userController = new UserController();
 









module.exports = userController;