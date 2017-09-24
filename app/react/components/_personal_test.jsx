import React, { Component } from 'react'
import { connect } from 'react-redux';

export default function _personal_test(props){
  const campuses= [{id: 1, name: "Luna", image: null}, {id: 2, name: "Terra", image: null}]
  return (
    <div className="ui two column grid" style={{ width: "90vw", margin: "auto" }}>
      {
        campuses.map((campus) => {
          return (
            <div className="column">
              <div className="ui fluid card">
                <div className="image">
                  <img src="/images/avatar/large/daniel.jpg" />
                </div>
                <div className="content">
                  <a className="header">{ campus.name }</a>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
