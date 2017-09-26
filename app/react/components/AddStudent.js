import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStudents, postStudent } from '../../reducers';

class AddStudent extends Component{
  constructor(props){
    super(props);
    this.state={
      nameInputValue: '',
      emailInputValue: '',
      campusId: '',
      iconClicked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIconClick = this.handleIconClick.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handleChange(evt){
    const newState = {};
    newState[evt.target.name] = evt.target.value;
    this.setState(newState);
  }
  handleSubmit(evt){
    debugger;
    evt.stopPropagation();
    evt.preventDefault();
    const { nameInputValue, emailInputValue, campusId } = this.state;
    this.props.submitNewStudent({name: nameInputValue, email: emailInputValue, campusId });
    this.setState({ iconClicked: false });
  }
  handleIconClick(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.setState({iconClicked:true});
  }
  renderIcon(iconClicked) {
    if(iconClicked){
      return null
    }
    return (
      <div className="ui icon buttons">
        <button className='ui button' onClick={this.handleIconClick}><i className="plus icon"></i></button>
      </div>
    )
  }

  renderForm(iconClicked, campuses){
    if(!iconClicked){
      return null
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div className="ui input focus" style={{ margin:'auto 5px' }}>
            <input onChange={this.handleChange} name='nameInputValue' placeholder='name'></input>
          </div>
          <div className="ui input focus" style={{ margin:'auto 5px' }}>
            <input onChange={this.handleChange} name='emailInputValue' placeholder='email'></input>
          </div>
          <div >
            <select name='campusId'
                    onChange={this.handleChange}
                    className="ui search dropdown"
                    style={{ width: "97%", margin: "8px 6px" }}
                    >
              <option value="">Campus</option>
              {
                campuses.map(campus=>{
                  return (<option value={ campus.id }> { campus.name } </option>)
                })
              }
            </select>
          </div>
          <div className="ui icon buttons" style={{ margin: "auto 5px", float: "right", width: "97%"}}>
            <button type='submit' className='ui button'><i className="plus icon"></i></button>
          </div>
        </div>
      </form>
    )
  }
  render(){
    const { iconClicked } = this.state;
    const { campuses }= this.props;
    return (
      <div style={{float:'right', margin:'10px 20px'}}>
        { this.renderIcon(iconClicked) }
        { this.renderForm(iconClicked, campuses) }
      </div>
    )
  }
}

function mapStateToProps({campuses}) {
  return {campuses}
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    submitNewStudent: (student) => {
      const newStudentThunk = postStudent(student, ownProps.history)
      dispatch(newStudentThunk);
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddStudent));
