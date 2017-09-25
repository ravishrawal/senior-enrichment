import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AddStudent extends Component{
  constructor(props){
    super(props);
    this.state={
      nameInputValue: '',
      emailInputValue: '',
      iconClicked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.handleIconClick = this.handleIconClick.bind(this);
  }
  handleChange(evt){
    const newState = {};
    newState[evt.target.name] = evt.target.value;
    this.setState(newState);
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

  renderForm(iconClicked){
    if(!iconClicked){
      return null
    }
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <div className="ui input focus" style={{ margin:'auto 5px' }}>
            <input onChange={this.handleChange} name='nameInputValue' placeholder='name'></input>
          </div>
          <div className="ui input focus" style={{ margin:'auto 5px' }}>
            <input onChange={this.handleChange} name='emailInputValue' placeholder='email'></input>
          </div>
          <div className="ui icon buttons">
            <button type='submit' className='ui button'><i className="plus icon"></i></button>
          </div>
        </div>
      </form>
    )
  }
  render(){
    const { iconClicked } = this.state
    return (
      <div style={{float:'right', margin:'10px 20px'}}>
        { this.renderIcon(iconClicked) }
        { this.renderForm(iconClicked) }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    handleSubmit: (evt) => {
      evt.preventDefault();
      console.log('SUBMITTING');
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddStudent));
