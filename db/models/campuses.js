const Sequelize = require('sequelize');
const db = require('../index.js');

const Campus = db.define('campus',{
	name: Sequelize.STRING,
	location: Sequelize.STRING,
	imageUrl: Sequelize.STRING
})

module.exports = Campus;