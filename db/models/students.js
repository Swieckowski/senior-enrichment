const Sequelize = require('sequelize');
const db = require('../index.js');

const Student = db.define('student',{
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING
})

module.exports = Student;