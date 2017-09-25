import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

function NavBar(props){
  console.log('Navbar Props: ', props);
  return (
    <div className="ui inverted menu">
      <NavLink exact to='/' className="purple item" activeClassName="purple item active">Home</ NavLink>
      <NavLink to='/students' className="purple item" activeClassName="purple item active">Students</ NavLink>
    </div>
  )
}

export default withRouter(NavBar)
