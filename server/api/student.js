const Student = require('../../db/models/students');
const router = require('express').Router();

router.get('/', (req, res, next) => {
	Student.findAll({})
	.then((students) => {
		res.json(students);
	})
	.catch(next);
});

module.exports = router;