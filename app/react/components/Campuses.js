import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchCampuses, removeCampus, fetchStudents, postCampus } from '../../reducers';
import AddCampus from './AddCampus';

export function Campuses(props){
  const {campuses} = props;
  return (
    <div className="ui two column grid" style={{ width: "90vw", margin: "auto" }}>
      {
        campuses.map((campus) => {
          return (
            <div key={campus.id} className="column">
              <Link to={`/campuses/${campus.id}`} >
                <div className="ui fluid card" style={{ textAlign: "center" }}>
                  <div className="image" >
                    <img src={campus.image} style={{ maxWidth:"100%", maxHeight:"100%", width: "60%", margin: "0 auto" }} />
                  </div>
                  <div className="content">
                    <i
                      className="right floated delete icon"
                      onClick={props.handleDeleteClick}
                      value={campus.id}
                      style={{ fontSize:"1.5em", color:"crimson" }}></i>
                    <li className="header">{ campus.name }</li>
                  </div>
                </div>
              </Link>
            </div>
          )
        })
      }
      <AddCampus />
    </div>
  )
}

function MapStateToProps(state){
  return {
    campuses: state.campuses
  }
}

function MapDispatchToProps(dispatch){
  return {
    handleDeleteClick: (evt) => {
      evt.preventDefault();
      const campusId = evt.target.attributes.value.value;
      const removeCampusThunk = removeCampus(campusId);
      dispatch(removeCampusThunk);
      const fetchCampusesThunk = fetchCampuses();
      dispatch(fetchCampusesThunk);
      const fetchStudentsThunk = fetchStudents();
      dispatch(fetchStudentsThunk);
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Campuses);
