'use strict';
const router = require('express').Router();
const db = require('../db');
const Student = db.models.student;
const Campus = db.models.campus;

module.exports = router;


router.get('/', (req, res, next) => {
  Student.findAll({
    include: [Campus]
  })
    .then(students => res.send(students));
});

router.get('/:id', (req, res, next) => {
  Student.findById(req.params.id, {
    include: [Campus]
  })
    .then(student => res.send(student))
    .catch((err) => res.send(err));
});

router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => {
      console.log(`Student ${student.name} Created!`);
      student.save();
      Student.findById(student.id, {
        include: [Campus]
      })
        .then(student => {
          console.log('NEW STUDENT: ', student);
          res.send(student);
        });
    });
});

router.put('/:id', (req, res, next) => {
  Student.update(req.body, {
    where: { id: req.params.id }
  })
    .then(student => console.log(student));
});

router.delete('/:id', (req, res, next) => {
  Student.destroy({
    where: {id: req.params.id}
  })
    .then(student => res.json(student));
});
