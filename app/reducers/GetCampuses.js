import axios from 'axios';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


//Action Types

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';


//Action Creators

export function getCampuses(campuses){
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function getCampus(campus){
  const action = { type: GET_CAMPUS, campus };
  return action;
}

//Thunk Creators

export function fetchCampuses(){
  return function thunk(dispatch) {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
}

//Reducer

export default function getCampusesReducer(state = [], action) {
  switch(action.type){
    case GET_CAMPUSES:
      return action.campuses;

    case GET_CAMPUS:
      return [...state, action.campus]; 

    default:
      return state;
  }
}
