import axios from 'axios';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//Action Types

const DELETE_CAMPUS = 'DELETE_CAMPUS';

//Action Creators

export function deleteCampus(campus){
  const action = {type: DELETE_CAMPUS, campus};
  return action;
}

//Thunk Creators

export function removeCampus(campusId){
  return function thunk(dispatch){
    axios.delete(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => {
        const action = deleteCampus(campus);
        dispatch(action);
      });
  };
}

//Reducer

export default function deleteCampusReducer(state=[], action) {
    switch(action.type){
      case DELETE_CAMPUS:
        return state.campuses.filter((campus) => {
          return campus.id !== action.campus.id;
        });

      default:
        return state;
  }
}
