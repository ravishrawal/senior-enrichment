'use strict';

const conn = require('../index');
const { Sequelize } = conn;

const Student = conn.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  }
});

const Campus = conn.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.STRING,
    validate: {
      isURL: true
    }
  }
}, {
  defaultScope: {
    include: [Student]
  }
});



//ASSOCIATIONS
Campus.hasMany(Student);
Student.belongsTo(Campus);
