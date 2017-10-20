const Student = require('../../db/models/students');
const router = require('express').Router();

router.get('/', (req, res, next) => {
	Student.findAll({include:[{all:true}]})
	.then((students) => res.json(students))
	.catch(next);
});

router.param("id", (req, res, next, id) => {
	Student.findOne({where: {id: id}})
	.then(function(student){
		req.student = student;
		next();
	})
});

router.delete('/:id', (req, res, next) => {
	req.student.destroy({force: true})
	.then(()=>res.json({message: 'Deleted Successfully'}))
	.catch(next);
});

router.put('/:id', (req, res, next) => {
	req.student.update(req.body)
	.then(()=>res.json({message: 'Updated Successfully'}))
	.catch(next);
});

router.post('/', (req, res, next) => {
	Student.create(req.body)
	.then(()=>res.json({message: 'Posted Successfully'}))
	.catch(next);
});

module.exports = router;