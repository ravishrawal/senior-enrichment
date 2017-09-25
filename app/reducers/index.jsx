import axios from 'axios'
import { combineReducers } from 'redux'
import students from './GetStudents'
import createstudent from './CreateStudent'
import campuses from './campuses'

const initialState = {}

const rootReducer = combineReducers({
  students,
  createstudent,
  campuses
})

export default rootReducer

export * from './GetStudents';
export * from './CreateStudent';
export * from './DeleteStudent';
export * from './GetStudent';
export * from './campuses';
