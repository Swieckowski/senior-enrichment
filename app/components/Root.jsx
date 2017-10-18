import React, { Component } from "react";
import { connect } from "react-redux";
import {loadCampuses} from "../reducers/campusReducer";

class Root extends Component {

  componentDidMount() {
    this.props.fetchCampuses()
  }

  render() {
    return (
      <div>
        <h1>Hello, we are starting the project</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  campuses: state
});

const mapDispatchToProps = (dispatch) => ({
  fetchCampuses: () => dispatch(loadCampuses())
});

export default connect(mapStateToProps,mapDispatchToProps)(Root);
