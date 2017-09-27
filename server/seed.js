const db = require('../db');
const Campus = db.models.campus;
const Student = db.models.student;

module.exports = function seed(){
  return Promise.all([
      Campus.create({
        name: 'Luna',
        address: '340 ET Boulevard, GalaxyFarAway 10128'
      }),
      Campus.create({
        name: 'Terra',
        address: '1356 Krombopulus Michael Street, Glipglop 90210'
      }),
      Campus.create({
        name: 'Mars',
        address: '202 Nebula Lane, Jacksonville 20301'
      }),
      Campus.create({
        name: 'Titan',
        address: '1045 Intergalatic Void Road, BigVoid 20234'
      })
    ])
    .then(([Luna, Terra, Mars, Titan]) => {
      Student.create({
        name: 'Ravish Rawal',
        email: 'rav@columbia.edu'
      }).then(rav => rav.setCampus(Luna));
      Student.create({
        name: 'Josh Smith',
        email: 'josh@columbia.edu'
      }).then(otherRav => otherRav.setCampus(Terra));
      Student.create({
        name: 'Robert Strang',
        email: 'robert@columbia.edu'
      }).then(robert => robert.setCampus(Mars));
      Student.create({
        name: 'Mateo Creamer',
        email: 'mateo@columbia.edu'
      }).then(robert => robert.setCampus(Titan));
      Student.create({
        name: 'Neeru Rawal',
        email: 'neeru@columbia.edu'
      }).then(robert => robert.setCampus(Terra));
      Student.create({
        name: 'Jeremiah Bullfrog',
        email: 'jbulls@columbia.edu'
      }).then(robert => robert.setCampus(Luna));
      Student.create({
        name: 'Snoop Dogg',
        email: 'snoop@columbia.edu'
      }).then(robert => robert.setCampus(Luna));
  });
}
