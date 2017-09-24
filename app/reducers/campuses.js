import axios from 'axios';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//Initial State


//Action Types

const CREATE_CAMPUS = 'CREATE_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

//Action Creators

export function getCampuses(campuses){
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

//Thunk Creators

export function fetchCampuses(){
  return function thunk(dispatch) {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        console.log('Campuses: ', campuses);
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
}

//Reducer

export default function reducer(state = [], action) {
  switch(action.type){
    case GET_CAMPUSES:
      return action.campuses;

    default:
      return state;
  }
}
