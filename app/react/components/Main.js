import React, {Component} from 'react';
import { fetchStudents, fetchCampuses } from '../../reducers/index.jsx';
import store from '../../store.jsx';
import Students from './Students';
import Campuses from './Campuses';
import _personal_test from './_personal_test';

export default class Main extends Component{
  componentDidMount(){
    const getStudentsThunk = fetchStudents();
    const getCampusesThunk = fetchCampuses();
    store.dispatch(getStudentsThunk);
    store.dispatch(getCampusesThunk);
  }
  render(){
    return (
      <div>
        <Campuses />
      </div>
    );
  }
}
