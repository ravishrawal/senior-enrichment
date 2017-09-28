import axios from 'axios';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//Action Types

const UPDATE_CAMPUS_INFO = 'UPDATE_CAMPUS_INFO';

//Action Creators

export function updateCampus(campus){
  const action = { type:UPDATE_CAMPUS_INFO, campus};
}

//Thunk Creators

export function updateCampusInfo(campus, campusId) {
  return function thunk(dispatch){
    axios.put(`/api/campuses/${campusId}`, campus)
      .then(res => res.data)
      .then(campus => {
        const action = updateCampus(campus);
        dispatch(action);
      });
  };
}

//reducers

export default function updateCampusReducer(state={}, action){
  switch(action.type){
    case UPDATE_CAMPUS_INFO:
      return state.campuses.filter((campus) => {
        return campus.id !== action.campus.id;
      }).concat(action.campus);

    default:
      return state;
  }
}
