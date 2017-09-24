import axios from 'axios';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//Initial State


//Action Types

const CREATE_STUDENT = 'CREATE_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

//Action Creators


export function getStudents(students){
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function getStudent(student){
  const action = { type: GET_STUDENT, student };
  return action;
}

//Thunk Creators

export function postStudent(student, history) {
  return function thunk(dispatch) {
    axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        const action = getStudent(newStudent);
        dispatch(action);
        history.push(`/students/${newStudent.id}`);
      });
  };
}

export function fetchStudents() {
  return function thunk(dispatch) {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  };
}

//Reducer

export default function reducer(state = [], action) {
  switch(action.type){
    case GET_STUDENTS:
      return action.students;

    case GET_STUDENT:
      return [...state, action.student];

    default:
      return state;
  }
}
