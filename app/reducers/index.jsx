import axios from 'axios'
import { combineReducers } from 'redux'
import students from './GetStudents'
import createStudentReducer from './CreateStudent'
import campuses from './GetCampuses'
import deleteStudentReducer from './DeleteStudent'

const initialState = {}

const rootReducer = combineReducers({
  students,
  campuses
})

export default rootReducer

export * from './GetStudents';
export * from './CreateStudent';
export * from './DeleteStudent';
export * from './GetStudent';
export * from './GetCampuses';
