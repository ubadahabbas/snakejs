const connection = require('../config/connection.js')

function marks(num) {
	var arr1 = [];
	for (var i = 0; i < num; i++) {
		arr1.push("?");
	}
	return arr1.toString();
}


// function ojectToSql(obj) {
// 	var arr2 = [];
// 	for (var key in obj) {
// 		arr2.push(key + "=" + obj[key]);
// 	}
// 	return arr2.toString();
// }


var ORM = {

	selectAll: function (table, cb) {
		var query = "SELECT * FROM " + table + ";";

		connection.query(query, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	insertOne: function (table, column, value, cb) {

		var query = "INSERT INTO " + table;

		query += " (";
		query += column.toString();
		query += ") ";
		query += "VALUES (";
		query += marks(value.length);
		query += ") ";

		console.log(query);
		connection.query(query, value, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},


	updateOne: function (id, cb) {

		var query = "UPDATE burgers SET devoured = true WHERE id = ?";
		console.log(id)
		connection.query(query, [id], function (err, result) {
			if (err) throw err;
			console.log(result)
			cb(result);
		});
	}
};

module.exports = ORM;