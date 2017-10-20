const Sequelize = require('sequelize');
const db = require('../index.js');

const Campus = db.define('campus',{
	name: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
	},
	location: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
	},
	imageUrl: Sequelize.STRING
})

module.exports = Campus;