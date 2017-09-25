import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { fetchStudents, fetchCampuses } from '../../reducers/index.jsx';
import store from '../../store.jsx';
import Students from './Students';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import NavBar from './NavBar';
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
      <Router>
        <div>
            <NavBar />
            <Route exact path='/:studentId' component={SingleStudent}  />
            <Route exact path='/:campusId' component={SingleCampus}  />
            <Route exact path='/students' component={Students}  />
            <Route exact path='/campus' component={Campuses}  />
            <Route exact path='/' component={Campuses}  />
        </div>
      </Router>
    );
  }
}
