const Sequelize = require('sequelize');
const db = require('../index.js');

const Campus = db.define('campus',{
	name: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
	},
	location: Sequelize.STRING,
	imageUrl: Sequelize.STRING
})

module.exports = Campus;