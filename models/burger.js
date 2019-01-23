const ORM = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
      ORM.selectAll('burgers', function(res) {
        cb(res);
      });
    },
  
    insertOne: function(column, value, cb) {
      ORM.insertOne('burgers', column, value, function(res) {
        cb(res);
      });
    },
  
    updateOne: function(id, cb) {
      ORM.updateOne([id], function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;