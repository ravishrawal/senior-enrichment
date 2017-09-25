import axios from 'axios';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { getStudent } from './index';

//Initial State

//Action Types

const CREATE_STUDENT = 'CREATE_STUDENT';

//Action Creators

export function createStudent(student){
  const action = { type: CREATE_STUDENT, student };
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
      });
  };
}


//Reducer

export default function createStudentReducer(state = [], action) {
  switch(action.type){

    case CREATE_STUDENT:
      return [...state, action.student];

    default:
      return state;
  }
}
