import axios from 'axios';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//Action Types

const UPDATE_STUDENT_INFO = 'UPDATE_STUDENT_INFO';

//Action Creators

export function updateStudent(student){
  const action = { type:UPDATE_STUDENT_INFO, student};
}

//Thunk Creators

export function updateStudentInfo(student, studentId) {
  return function thunk(dispatch){
    axios.put(`/api/students/${studentId}`, student)
      .then(res => res.data)
      .then(student => {
        const action = updateStudent(student);
        dispatch(action);
      });
  };
}

//reducers

export default function updateStudentReducer(state={}, action){
  switch(action.type){
    case UPDATE_STUDENT_INFO:
      return state.students.filter((student) => {
        return student.id !== action.student.id;
      }).concat(action.student);

    default:
      return state;
  }
}
