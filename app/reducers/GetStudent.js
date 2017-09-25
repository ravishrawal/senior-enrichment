// import axios from 'axios';
// import createLogger from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
//
// //Action Types
//
// const GET_STUDENT = 'GET_STUDENT';
//
// //Action Creators
//
// export function getStudent(student){
//   const action = { type: GET_STUDENT, student };
//   return action;
// }
//
// //Thunk Creator
//
// export function fetchSingleStudent(studentId) {
//   return function thunk(dispatch) {
//     axios.get(`/api/students/${studentId}`)
//       .then(res => res.data)
//       .then(student => {
//         const action = getStudent(student);
//         dispatch(action);
//       });
//   };
// }
//
// //Reducers
//
// export default function reducer(state = {}, action) {
//   switch(action.type){
//
//     case GET_STUDENT:
//       return {currentStudent: action.student};
//
//     default:
//       return state;
//   }
// }
