import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SingleStudent from './SingleStudent';
import AddStudent from './AddStudent';
import { removeStudent, fetchStudents } from '../../reducers';


export function Students(props){
  const {students} = props;
  console.log('STUDENTS: ', students);
  return (
    <div>
      <AddStudent />
      <table className="ui single line table" style={{ textAlign:"center" }}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Campus</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
          students.map((student, index) => {
            return (
              <tr key={student.id}>
                  <td>{index+1}</td>
                  <td
                    value= {student.id}
                    className='selectable'
                    onClick={props.handleStudentClick}
                    >
                      {student.name}
                  </td>
                    <td>{student.campus.name}</td>
                  <td
                    onClick={props.handleDeleteClick}
                    className='selectable negative'
                    name = 'deletebutton'
                    value = {student.id}
                  >Delete</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

function renderCampus(campus){
  if(campus) return (<td>{campus.name}</td>)
  return (
    <td className="selectable warning">Set Campus</td>
  )
}

function MapStateToProps(state){
  return {
    students: state.students,
    currentStudent: state.currentStudent
  }
}

function MapDispatchToProps(dispatch, ownProps){
  return {
    handleDeleteClick: (evt) => {
      evt.preventDefault()
      const studentId = evt.target.attributes.value.value;
      const removeStudentThunk = removeStudent(studentId)
      dispatch(removeStudentThunk);
      const fetchStudentsThunk = fetchStudents();
      dispatch(fetchStudentsThunk);
    },
    handleStudentClick: (evt) => {
      evt.preventDefault();
      const studentId = evt.target.attributes.value.value;
      ownProps.history.push(`/students/${studentId}`)
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Students);
