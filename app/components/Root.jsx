import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {loadCampuses} from "../reducers/campusReducer";
import {loadStudents} from "../reducers/studentReducer";
import StudentList from "./StudentList"
import CampusList from "./CampusList.jsx"
import Navbar from "./Navbar"

class Root extends Component {

  componentDidMount() {
    this.props.fetchCampusesAndStudents();
  }

  render() {

    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={CampusList}/>
          <Route path="/students" component={StudentList}/>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCampusesAndStudents: () => {
    dispatch(loadCampuses())
    dispatch(loadStudents())
  }
});

export default withRouter(connect(null,mapDispatchToProps)(Root));
