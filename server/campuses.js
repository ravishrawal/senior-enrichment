const router = require('express').Router();
const db = require('../db');
const Campus = db.models.campus;

module.exports = router;

router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.send(campuses));
});

router.get('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
    .then(campus => res.send(campus));
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  Campus.create(req.body)
    .then(campus=>{
      console.log(`Campus ${campus.name} Created!`);
      campus.save();
    });
});

router.put('/:id', (req, res, next) => {
  Campus.update(req.body, {
    where: { id: req.params.id }
  })
    .then(campus => console.log(campus));
});

router.delete('/:id', (req, res, next) => {
  Campus.destroy({
    where: { id: req.params.id }
  })
    .then(campus => res.json);
});
