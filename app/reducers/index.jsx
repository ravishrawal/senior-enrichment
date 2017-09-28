import axios from 'axios';
import { combineReducers } from 'redux';
import studentsReducer from './GetStudents';
import createStudentReducer from './CreateStudent';
import campusesReducer from './GetCampuses';
import deleteStudentReducer from './DeleteStudent';
import currentStudent from './ReceiveSingleStudent';
import updateStudent from './UpdateStudent';
import currentCampus from './ReceiveSingleCampus';
import createCampusReducer from './CreateCampus';
import deleteCampus from './DeleteCampus';


const rootReducer = combineReducers({
  students: studentsReducer,
  campuses: campusesReducer,
  currentStudent,
  currentCampus
})

export default rootReducer

export * from './GetStudents';
export * from './CreateStudent';
export * from './UpdateStudent';
export * from './DeleteStudent';
export * from './ReceiveSingleStudent';
export * from './GetCampuses';
export * from './ReceiveSingleCampus';
export * from './CreateCampus';
export * from './DeleteCampus';
