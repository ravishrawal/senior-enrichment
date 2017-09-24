import React, { Component } from 'react'
import { connect } from 'react-redux';

export function Students(props){
  const {students} = props;
  console.log('STUDENTS: ', students);
  return (
    <div>
      {
        students.map((student) => {
          return (
            <li>{student.name }</li>
          )
        })
      }
    </div>
  )
}

function MapStateToProps(state){
  console.log('STATE: ', state);
  return {
    students: state.students
  }
}

function MapDispatchToProps(dispatch){

}

export default connect(MapStateToProps, MapDispatchToProps)(Students);
