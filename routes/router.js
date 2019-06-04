var _= require("lodash");
var express_graphql = require('express-graphql');
var modelschema = require('../middlewares/graphql/gateway.schema/gateway.schemaGQL');
var root = require('./gateway.routes');
module.exports = function(app)
{

   //I could put logic here to lazy load or inject the schema I want using dependancy injection 
    app.use('/graphql', express_graphql({
        schema: modelschema,
        rootValue: root,
        graphiql: true
    }));
}