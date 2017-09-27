import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

export function Campuses(props){
  const {campuses} = props;
  console.log('CAMPUSES: ', campuses);
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
                      style={{ fontSize:"1.5em", color:"crimson" }}></i>
                    <li className="header">{ campus.name }</li>
                  </div>
                </div>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

function MapStateToProps(state){
  console.log('STATE: ', state);
  return {
    campuses: state.campuses
  }
}

function MapDispatchToProps(dispatch){
  return {
    handleDeleteClick: {
      
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Campuses);
