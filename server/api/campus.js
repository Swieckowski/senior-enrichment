const Campus = require('../../db/models/campuses');
const router = require('express').Router();

router.get('/', (req, res, next) => {
	Campus.findAll({include:[{all:true}]})
	.then((campuses) => res.json(campuses))
	.catch(next);
});

router.param('id', (req, res, next, id) => {
	Campus.findOne({where: {id: id}})
	.then(function(campus){
		req.campus = campus;
		next();
	})
});

router.delete('/:id', (req, res, next) => {
	req.campus.destroy({force: true})
	.then(()=>res.json({message: 'Deleted Successfully'}))
	.catch(next);
});

router.put('/:id', (req, res, next) => {
	req.campus.update(req.body)
	.then(()=>res.json({message: 'Updated Successfully'}))
	.catch(next);
});

router.post('/', (req, res, next) => {
	Campus.create(req.body)
	.then(()=>res.json({message: 'Posted Successfully'}))
	.catch(next);
});

module.exports = router;
