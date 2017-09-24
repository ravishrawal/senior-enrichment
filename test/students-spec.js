const supertest = require('supertest');
const app = supertest(require('../server/students.js'));
const expect = require('chai').expect;

describe('Gets The Students', ()=>{
  it('returns the students', ()=>{
    return app.get('/')
      .then(result => {
        console.log('GET RESULT', result);
        expect(result.length).to.equal(2);
      })
      .catch(err => console.log('ERROR, ', err.message));
  });
  it('posts a student', ()=>{
    const student = {name: 'TestMan', email: 'testman@man.com'};
    return app.post('/api/students')
      .send(student)
      .expect(201)
      .then(result => console.log('POST RESULT', result))
      .catch(err=>console.log('ERROR, ', err.message));
  });
});
