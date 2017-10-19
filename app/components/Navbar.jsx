import React, { Component } from "react";
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from "react-redux";

const Navbar = (props) => {
  return (
      <nav>
        <NavLink 
          exact 
          to="/"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
        >Home
        </NavLink>
        <br/>
        <NavLink 
          exact 
          to="/students"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
        >Students
        </NavLink>
      </nav>
  	)

}

export default withRouter(connect()(Navbar));
