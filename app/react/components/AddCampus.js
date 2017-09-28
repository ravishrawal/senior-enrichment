import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCampuses, postCampus, getCampus } from '../../reducers';

class AddCampus extends Component{
  constructor(props){
    super(props);
    this.state={
      nameInputValue: '',
      addressInputValue: '',
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
    console.log(this.state);
  }
  handleSubmit(evt){
    evt.preventDefault();
    const { nameInputValue, addressInputValue } = this.state;
    this.props.submitNewCampus({name: nameInputValue, address: addressInputValue });
    this.setState({ iconClicked: false });
  }
  handleIconClick(evt){
    evt.preventDefault();
    this.setState({iconClicked:true});
  }
  renderIcon(iconClicked) {
    if(iconClicked){
      return null
    }
    return (
      <div className="ui icon buttons" style={{ width:"100%" }}>
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
        <div style={{ textAlign:"center", width:"100%" }}>
          <div className="ui input focus" style={{ margin:'10px 5px', width:"36%" }}>
            <input onChange={this.handleChange} name='nameInputValue' placeholder='name'></input>
          </div>
          <div className="ui input focus" style={{ margin:'10px 5px', width:"59%" }}>
            <input onChange={this.handleChange} name='addressInputValue' placeholder='address'></input>
          </div>
          <div className="ui icon buttons" style={{ margin: "auto 5px", width: "97%"}}>
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
      <div className="column" style={{ textAlign:"center" }}>
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
    submitNewCampus: (campus) => {
      const newCampusThunk = postCampus(campus, ownProps.history)
      dispatch(newCampusThunk);
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCampus));
