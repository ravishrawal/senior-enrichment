import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleCampus, receiveSingleCampus, updateCampusInfo, updateStudentInfo, receiveSingleStudent } from '../../reducers';
import { Link } from 'react-router-dom';

export class SingleCampus extends Component{
  constructor(props){
    super(props);
    this.state = {
      isClicked: false,
      name:'',
      address:''
    }
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.removeStudentHandler = this.removeStudentHandler.bind(this);
  }
  componentDidMount(){
    const { campusId } = this.props.match.params;
    debugger;
    this.props.getCampusInfo(campusId);
  }
  changeHandler(evt) {
    evt.preventDefault()
    const newState = {};
    newState[evt.target.name] = evt.target.value;
    this.setState(newState);
  }
  submitHandler(evt) {
    evt.preventDefault();
    const { campusId } = this.props.match.params;
    const { name, address } = this.state;
    this.props.submitUpdatedCampus({name, address }, campusId);
    this.setState({ isClicked: false });
  }
  removeStudentHandler(evt) {
    evt.preventDefault();
    const { currentCampus } = this.props;
    const studentId = evt.target.attributes.value.value;
    this.props.removeStudent(studentId, currentCampus);
  }
  render(){
    const { currentCampus } = this.props;
    const { students } = this.props.currentCampus;
    return (
      <div>
        { this.toggleEditMode(this.state.isClicked, currentCampus) }
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
                  <Link to={`/students/${student.id}`} style={{ margin: "9vw"}}>
                    <tr>
                      <td>
                        <h4 className="ui image header">
                          <img src={ student.image } className="ui mini rounded image" />
                          <div className="content">
                            { student.name }
                            <i
                              className="right floated delete icon"
                              onClick={this.removeStudentHandler}
                              value={student.id}
                              style={{ fontSize:"1.5em", color:"crimson" }}></i>
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
  toggleEditMode(isClicked, currentCampus){
    const { students } = currentCampus;
    if(!isClicked){
      return(
        <div style={{ textAlign: "center" }}>
          <div style={{ margin: "40px auto"}}>
            <h1 style={{ display:"inline" }}>Welcome To The {currentCampus.name} Campus</h1>
              <button
                className="ui icon button"
                onClick={()=>this.setState({isClicked:true})}
                style={{ display:"inline", position:"absolute", margin:"auto 13px" }}>
                <i className="edit icon"></i>
              </button>
            <h5>{currentCampus.address}</h5>
          </div>
        </div>
      )
    }
    return (
      <form onSubmit={this.submitHandler}>
        <div style={{ textAlign: "center" }}>
          <div style={{ margin: "40px auto"}}>
            <h3 style={{ display:"inline" }}>
              <div className= "ui input focus">
                <input
                  onChange= {this.changeHandler}
                  placeholder='name'
                  name= 'name'
                >
                </input>
              </div>
            </h3>
              <button
                type='submit'
                className="ui icon button"
                style={{ display:"inline", position:"absolute", margin:"auto 13px" }}>
                <i className="checkmark icon"></i>
              </button>
            <h5>
              <div className= "ui input focus">
                <input
                  onChange= {this.changeHandler}
                  placeholder='address'
                  name= 'address'
                >
                </input>
              </div>
            </h5>
          </div>
        </div>
      </form>
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
      const receiveCampusThunk = fetchSingleCampus(campusId);
      dispatch(receiveCampusThunk);
    },
    submitUpdatedCampus: (campus, campusId) => {
      const updatedCampusThunk = updateCampusInfo(campus, campusId);
      dispatch(updatedCampusThunk);
      const action = receiveSingleCampus(campus);
      dispatch(action);
    },
    removeStudent: (studentId, campus) => {
      const removeStudentThunk = updateStudentInfo({ campusId:null }, studentId)
      dispatch(removeStudentThunk);
      const action2 = receiveSingleCampus(campus);
      dispatch(action2);
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(SingleCampus);
