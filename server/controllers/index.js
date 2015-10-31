var models = require('../models');
var bluebird = require('bluebird');
var parser = require('body-parser');


var userFields = ['username'];
var messagesFields = ['message', 'username', 'roomname'];


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        // err
        res.json(results);
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {

      var params = [req.body['message'], req.body['username'], req.body['roomname']];
      
      console.log(params);

      console.log("body here");
      console.log(req.body.message);
      

      models.messages.post(params, function(err, results) {
        // err
        res.json(results);
      })      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        // err
        res.json(results);
      })
    },
    post: function (req, res) {
      var params = [req.body['username']];  

      models.users.post(params, function(err, results) {
        // err
        res.json(results);
      })  
    }
  }
};

 