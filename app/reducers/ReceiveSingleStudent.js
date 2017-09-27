import axios from 'axios';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//Action Types

const RECEIVE_SINGLE_STUDENT = 'RECEIVE_SINGLE_STUDENT';

//Action Creators

export function receiveSingleStudent(student){
  const action = { type: RECEIVE_SINGLE_STUDENT, student };
  return action;
}

//Thunk Creators

export function fetchSingleStudent(studentId) {
  return function thunk(dispatch) {
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        const action = receiveSingleStudent(student);
        dispatch(action);
      });
  };
}

//Reducer

export default function fetchSingleStudentReducer(state={}, action) {
  switch(action.type){

    case RECEIVE_SINGLE_STUDENT:
    return Object.assign({}, state, action.student);

    default:
      return state;
  }
}
