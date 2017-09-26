import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleStudent, receiveSingleStudent, updateStudentInfo } from '../../reducers';

class SingleStudent extends Component{
  constructor(props){
    super(props);
    this.state = {
      isClicked: false,
      name:'',
      email:'',
      campusId:'',
      image:''
    }
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  componentDidMount() {
    const { studentId } = this.props.match.params;
    this.props.getStudentInfo(studentId)
  }
  changeHandler(evt) {
    evt.preventDefault()
    const newState = {};
    newState[evt.target.name] = evt.target.value;
    this.setState(newState);
  }
  submitHandler(evt) {
    evt.preventDefault();
    const { studentId } = this.props.match.params;
    const { name, email, campusId, image } = this.state;
    this.props.submitUpdatedStudent({name, email, campusId, image }, studentId);
    this.setState({ isClicked: false });
  }
  render(){
    const { currentStudent, toggleEditMode } = this.props;
    const { isClicked } = this.state;
    return (
      <div>
        { this.toggleEditMode(isClicked, currentStudent) }
      </div>
    )
  }
  toggleEditMode (isClicked, student) {
    const { name, email, image, campus } = student;
    const { campuses } = this.props;
    if(!isClicked) {
      return (
        <div>
          <div style={{ float:"left", overflow:"hidden", height:"25vw" }}>
            <img style={{ width:"25vw", height:"25vw", margin:"auto 5px" }} src={image} />
          </div>
          <div className="item" style={{ width:"80%" }}>
            <div style={{ width:"100%"}}>
              <h1 style={{ display:"inline" }}>{ name }</h1>
              <button
                className="ui icon button"
                onClick={()=>this.setState({isClicked:true})}
                style={{ display:"inline", position:"absolute", margin:"auto 13px" }}>
                <i className="edit icon"></i>
              </button>
            </div>
            <h3>Email: { email }</h3>
            { campus &&
              <h3><Link to={`/campuses/${campus.id}`}>Campus: { campus.name }</Link></h3>
            }
          </div>
        </div>
      )
    }
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <div style={{ float:"left", overflow:"hidden" }}>
            <img style={{ width:"25vw", height:"25vw", margin:"auto 5px" }} src={image} />
            <div className= "ui input focus" style={{ display: "block", margin:"auto 5px" }}>
              <input
                onChange= {this.changeHandler}
                name= 'image'
                placeholder='new image url'></input>
            </div>
          </div>
          <div className="item" style={{ width:"80%" }}>
            <div style={{ width:"100%"}}>
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
            </div>
            <h5>
              <div className= "ui input focus">
                <input
                  onChange= {this.changeHandler}
                  placeholder='email'
                  name= 'email'
                >
                </input>
              </div>
            </h5>
            { campus &&
                <select name='campusId'
                        onChange={this.changeHandler}
                        className="ui dropdown"
                        style={{ width: "15.5%", margin: "auto", position: "relative" }}
                        >
                  <option value="">Campus</option>
                  {
                    campuses.map(campus=>{
                      return (<option key= {campus.id} value={ campus.id }> { campus.name } </option>)
                    })
                  }
                </select>
            }
          </div>
        </div>
      </form>
    )
  }
}



function MapStateToProps(state){
  return {
    currentStudent: state.currentStudent,
    campuses: state.campuses
  }
}

function MapDispatchToProps(dispatch){
  return {
    getStudentInfo: (studentId) => {
      const receiveStudentThunk = fetchSingleStudent(studentId);
      dispatch(receiveStudentThunk);
    },
    submitUpdatedStudent: (student, studentId) => {
      const updatedStudentThunk = updateStudentInfo(student, studentId);
      dispatch(updatedStudentThunk);
      const action = receiveSingleStudent(student);
      dispatch(action);
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(SingleStudent);
