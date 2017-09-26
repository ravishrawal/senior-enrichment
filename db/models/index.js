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
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'https://semantic-ui.com/images/avatar/large/elliot.jpg'
  }
});

const Campus = conn.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
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
