import React, { Component } from 'react'
import { connect } from 'react-redux';

export default function _personal_test(props){
  const campuses= [{id: 1, name: "Luna", image: null}, {id: 2, name: "Terra", image: null}]
  return (
    <table className="ui single line table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>E-mail address</th>
        </tr>
      </thead>
      <tbody>
      {
        campuses.map((campus) => {
          return (
            <tr>
              <td>{campus.id}</td>
              <td>{campus.name}</td>
              <td>{campus.image}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}
