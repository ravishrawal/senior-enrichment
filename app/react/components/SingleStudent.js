import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleStudent } from '../../reducers';

class SingleStudent extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const { studentId } = this.props.match.params;
    this.props.renderStudent(studentId)
  }
  render(){
    return (
      <div>
        <h1>{this.props.currentStudent.name}</h1>
      </div>
    )
  }
}

function MapStateToProps(state){
  console.log('SINGLE STUDENT STATE: ', state);
  return {
    currentStudent: state.currentStudent
  }
}

function MapDispatchToProps(dispatch){
  return {
    renderStudent: (studentId)=>{
      const receiveStudentThunk = fetchSingleStudent(studentId);
      dispatch(receiveStudentThunk);
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(SingleStudent);
