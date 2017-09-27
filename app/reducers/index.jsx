import axios from 'axios';
import { combineReducers } from 'redux';
import studentsReducer from './GetStudents';
import createStudentReducer from './CreateStudent';
import campusesReducer from './GetCampuses';
import deleteStudentReducer from './DeleteStudent';
import currentStudent from './ReceiveSingleStudent';
import updateStudent from './UpdateStudent';
import currentCampus from './ReceiveSingleCampus';


const rootReducer = combineReducers({
  students: studentsReducer,
  campuses: campusesReducer,
  currentStudent,
  currentCampus
})

export default rootReducer

export * from './GetStudents';
export * from './CreateStudent';
export * from './DeleteStudent';
export * from './GetCampuses';
export * from './ReceiveSingleStudent';
export * from './UpdateStudent';
export * from './ReceiveSingleCampus';
