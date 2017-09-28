import axios from 'axios';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { getCampus } from './index';

//Action Types

const CREATE_CAMPUS = 'CREATE_CAMPUS';

//Action Creators

export function createCampus(campus){
  const action = { type: CREATE_CAMPUS, campus };
  return action;
}

//Thunk Creators

export function postCampus(campus, history) {
  return function thunk(dispatch) {
    debugger
    axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        const action = getCampus(newCampus);
        debugger
        dispatch(action);
      });
  };
}


//Reducer

export default function createCampusReducer(state = [], action) {
  switch(action.type){

    case CREATE_CAMPUS:
      return [...state, action.campus];

    default:
      return state;
  }
}
