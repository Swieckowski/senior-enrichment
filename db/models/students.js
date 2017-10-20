const Sequelize = require('sequelize');
const db = require('../index.js');

const Student = db.define('student',{
	firstName: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}	
	},
	lastName: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}	
	}
})

module.exports = Student;