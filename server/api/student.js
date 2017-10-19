const Student = require('../../db/models/students');
const router = require('express').Router();

router.get('/', (req, res, next) => {
	Student.findAll({include:[{all:true}]})
	.then((students) => res.json(students))
	.catch(next);
});

router.delete('/:id', (req, res, next) => {
	Student.findOne({where: {id: req.params.id} })
	.then((student) => student.destroy({force: true}))
	// I send an empty object here so that the axios request is completed.
	.then(()=>res.json({}))
	.catch(next);
})

module.exports = router;