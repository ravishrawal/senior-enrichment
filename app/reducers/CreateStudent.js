import axios from 'axios';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//Initial State

//Action Types

const CREATE_STUDENT = 'CREATE_STUDENT';

//Action Creators

export function createStudent(student){
  const action = { type: CREATE_STUDENT, student };
  return action;
}

//Thunk Creators




//Reducer

export default function reducer(state = [], action) {
  switch(action.type){

    case CREATE_STUDENT:
      return [...state, action.student];

    default:
      return state;
  }
}
