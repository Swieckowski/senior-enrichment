const Campus = require('../../db/models/campuses');
const router = require('express').Router();

router.get('/', (req, res, next) => {
	Campus.findAll({include:[{all:true}]})
	.then((campuses) => res.json(campuses))
	.catch(next);
});

router.delete('/:id', (req, res, next) => {
	Campus.findOne({where: {id: req.params.id} })
	.then((campus) => campus.destroy({force: true}))
	// I send an empty object here so that the axios request is completed.
	.then(()=>res.json({}))
	.catch(next);
})

module.exports = router;
