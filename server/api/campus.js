const Campus = require('../../db/models/campuses');
const router = require('express').Router();

router.get('/', (req, res, next) => {
	Campus.findAll({})
	.then((campuses) => {
		res.json(campuses);
	})
	.catch(next);
});

module.exports = router;
