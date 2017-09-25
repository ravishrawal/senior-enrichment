import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function SingleStudent(props){
  console.log('PROPS', props);
  return (
    <h2>{props.name}</h2>
  );
}

function MapStateToProps(state){
  console.log('SINGLE STUDENT STATE: ', state);
  return {
    students: state.students,
    currentStudent: state.currentStudent
  }
}

export default connect(MapStateToProps)(SingleStudent);
