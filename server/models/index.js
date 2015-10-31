var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = 'select messages.message_id, messages.message, messages.roomname, users.username from messages \
                     left outer join users on (messages.user_id = users.user_id) \
                     order by messages.id desc';


      console.log("get queryStr here ");
      console.log(queryStr);

      db.query(queryStr, function(err, results) {
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = 'insert into messages(message, user_id, roomname) \
                      values (?, (select user_id from users where username = ? limit 1), ?)';


      console.log("post queryStr here ");
      console.log(queryStr);

      db.query(queryStr, params, function(err, results) {
        callback(results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },
    post: function (params, callback) {
      var queryStr = 'insert into users(username) values (?)';


      db.query(queryStr, params, function(err, results) {
      console.log('results here')
      console.log(results);

      console.log('query here')
      console.log(queryStr);
        callback(results);
      });
    }
  }
};