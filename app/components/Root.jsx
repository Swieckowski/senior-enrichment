import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {loadCampuses} from "../reducers/campusReducer";
import {loadStudents} from "../reducers/studentReducer";
import StudentList from "./StudentList";
import CampusList from "./CampusList";
import Navbar from "./Navbar";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";

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
          <Route path="/campus/:campusId" component={SingleCampus}/>
          <Route path="/student/:studentId" component={SingleStudent}/>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCampusesAndStudents: () => {
    dispatch(loadCampuses());
    dispatch(loadStudents());
  }
});

export default withRouter(connect(null,mapDispatchToProps)(Root));
