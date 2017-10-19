import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import {deleteCampusAndUpdate} from "../reducers/campusReducer";

const CampusList = (props) => {

  //variables for clarity
  const campusesArr = props.campuses;
  const {handleOnClick} = props;

  return (
    <div>
      {campusesArr.map((campus)=>{
        return (
            <div key={campus.id}>
              <img src={campus.imageUrl} height="42" width="42"/>
              <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
              <button onClick={() => handleOnClick(campus.id)}>X</button>
            </div>
            )
      })}
    </div>
  	)
}

const mapStateToProps = (state) => ({
  campuses: state.campusesObj.campuses
});

//handleOnClick deletes a campus then redirects to the homepage, where the campus view is the default. 
//This IS the campus view, but using the same Thunk as the single campus view seem seems DRYer to me.
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleOnClick (id){ 
    dispatch(deleteCampusAndUpdate(id, ownProps.history));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusList));