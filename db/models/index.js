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
    defaultValue: 'https://semantic-ui.com/images/avatar/large/elliot.jpg',
    validate: {
      isURL: true
    }
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
    defaultValue: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1ccdd322433737.5631e853db4a9.png",
    validate: {
      isURL: true
    }
  },
  address: {
    type: Sequelize.STRING,
    defaultValue: 'No Address Specified'
  }
}, {
  defaultScope: {
    include: [Student]
  }
});



//ASSOCIATIONS
Campus.hasMany(Student);
Student.belongsTo(Campus);
