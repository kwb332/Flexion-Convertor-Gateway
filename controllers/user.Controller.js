var _= require("lodash");
var Event = require('../models/exam.model');
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
   /*  updateEvent()
     {
        var _updateEvent = async function(args)
        {
            var id = args.updateEvent._id;
            var results = null;
            await Event.findById(id,  function(err, foundEvent)
            {
                if(err)
                {
                    console.log("There is an error");
                    console.log(err);
                } 
                if(foundEvent)
                {
                   
                    console.log(foundEvent);
                
                 
                    _.merge(foundEvent, args.updateEvent);
                    foundEvent.save(function(err)
                    {
                       if(err)
                       {
                           console.log(err)
                       }
                       results = foundEvent;
                    })
                  
                }
            });
        
            return results;
           
        }
        return _updateEvent;
     }
     deleteEvent()
     {
        var _deleteEvent = function(args)
        {
            var id = args._id;
            var result = false;
            Event.findByIdAndRemove(id, result = function(err)
            {
                
                if(err)
                {
                    console.log("There is an error");
                    console.log(err);
                    return result;
                } 
                else
                {
                  result = true;
                  return result;
                }
            });
           
        }
        return _deleteEvent;
     }
     addEvent()
     {
        var _addEvent = async function(args) {
            var newEvent  = new Event(args.newEvent);
            var isAdded = false;
            var startDate = args.newEvent.startDate;
            var endDate = args.newEvent.endDate;
            
          
            await newEvent.save(function(err)
             {
                 if(err)
                 {
                    console.log(err);
                    isAdded = false;
                 }
                 else
                 {
                      isAdded = true;
                 }
             });
            
         
            return isAdded;
         }
         return _addEvent;
     } */
   
 }

 let userController = new UserController();
 









module.exports = userController;