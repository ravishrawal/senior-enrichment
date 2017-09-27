import axios from 'axios';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//Acton Types

const RECEIVE_SINGLE_CAMPUS = 'RECEIVE_SINGLE_CAMPUS';

//Action Creators

export function receiveSingleCampus(campus) {
  const action = { type: RECEIVE_SINGLE_CAMPUS, campus };
  return action;
}

//Thunk Creators

export function fetchSingleCampus(campusId) {
  debugger;
  return function thunk(dispatch) {
    axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => {
        const action = receiveSingleCampus(campus);
        console.log('CAMPUS: ', campus);
        dispatch(action);
      });
  };
}

//Reducers

export default function fetchSingleCampusReducer(state={}, action) {
  switch (action.type) {
    
    case RECEIVE_SINGLE_CAMPUS:
    debugger;
      return Object.assign({}, state, action.campus);

    default:
      return state;
  }
}
