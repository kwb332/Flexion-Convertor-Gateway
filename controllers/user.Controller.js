var _= require("lodash");
var Event = require('../models/exam.model');
import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://flexionuserapi.azurewebsites.net/graphql',
});

 class UserController {
   
    constructor() {  }
   /* getStudents() { 
        var data = null;
        client
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
        .then(response => console.log(response.data));


     }*/

     getStudents() { 
        let foundEvent = null;
        var students = async function(res) { 
            
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
            .then(response => foundEvent = response.data);
               console.log("im the man");
               console.log(foundEvent);
               return foundEvent;
              
        }

        students().then(returner(res));

     }

     returner(res)
     {
         return res;
     }
     getStudent()
     {
        var _event = async function(args,res) { 
            var id = args.id;
            let foundEvent = null;
            await Event.findById(id, function(err,event)
            {
               if(err)  
               {
                   console.log(err);
               }
                if(event)
                {
                    foundEvent = event;
                }
            }
            );
               return foundEvent;
        }
        return _event;
     }
     getTeachers() { 
        var events = async function() {
            return await Event.find(function(err,events)
            {
                if(err)
                {
                    console.log(err);
                }
                if(events)
                {
                
                 
                }
               
            });
             
         }
         return events;
     }
     getTeacher()
     {
        var _event = async function(args,res) { 
            var id = args.id;
            let foundEvent = null;
            await Event.findById(id, function(err,event)
            {
               if(err)  
               {
                   console.log(err);
               }
                if(event)
                {
                    foundEvent = event;
                }
            }
            );
               return foundEvent;
        }
        return _event;
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