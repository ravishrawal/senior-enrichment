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
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1ccdd322433737.5631e853db4a9.png" style={{ maxWidth:"100%", maxHeight:"100%", width: "60%", margin: "0 auto" }} />
                  </div>
                  <div className="content">
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

}

export default connect(MapStateToProps, MapDispatchToProps)(Campuses);
