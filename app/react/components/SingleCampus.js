import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleCampus } from '../../reducers';
import { Link } from 'react-router-dom';

export class SingleCampus extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const { campusId } = this.props.match.params;
    debugger;
    this.props.getCampusInfo(campusId);
  }
  render(){
    const { currentCampus } = this.props;
    console.log('PROPS: ', this.props);
    const { students } = this.props.currentCampus;
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ margin: "40px auto"}}>
          <h1>Welcome To The {currentCampus.name} Campus</h1>
          <h5>{currentCampus.address}</h5>
        </div>
        <table className="ui very basic collapsing celled table" style={{ textAlign:
            "center", margin:"auto", width: "90%" }}>
          <thead>
            <tr><th><h3>Students</h3></th></tr>
          </thead>
          <tbody style={{ width:"90%" }}>
            {
              students &&
              students.map((student) => {
                return (
                  <Link to={`/students/${student.id}`} style={{ margin: "10vw"}}>
                    <tr>
                      <td>
                        <h4 className="ui image header">
                          <img src={ student.image } className="ui mini rounded image" />
                          <div className="content">
                            { student.name }
                            <div className="sub header" style={{ textAlign:"left" }}>MORE INFO</div>
                          </div>
                        </h4>
                      </td>
                    </tr>
                  </Link>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

function MapStateToProps(state){
  return {
    currentCampus: state.currentCampus,
    campuses: state.campuses
  }
}

function MapDispatchToProps(dispatch) {
  return {
    getCampusInfo: (campusId) => {
      debugger;
      const receiveCampusThunk = fetchSingleCampus(campusId);
      dispatch(receiveCampusThunk);
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(SingleCampus);
