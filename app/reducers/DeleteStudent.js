import axios from 'axios';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//Action Types

const DELETE_STUDENT = 'DELETE_STUDENT';

//Action Creators

export function deleteStudent(student){
  const action = {type: DELETE_STUDENT, student};
  return action;
}

//Thunk Creators

export function removeStudent(studentId){
  return function thunk(dispatch){
    axios.delete(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        const action = deleteStudent(student);
        dispatch(action);
      });
  };
}

//Reducer

export default function deleteStudentReducer(state=[], action) {
  switch(action.type){
    case DELETE_STUDENT:
      return state.students.filter((student) => {
        return student.id !== action.student.id;
      });

    default:
      return state;
  }
}
