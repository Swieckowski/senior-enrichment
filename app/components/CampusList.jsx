import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import {deleteCampusAndUpdate} from "../reducers/campusReducer";
import CampusPoster from "./CampusPoster";

const CampusList = (props) => {

  //variables for clarity
  const {handleOnClick, campuses} = props;

  return (
    <div>
      <br/>
      {campuses.length? campuses.map((campus)=>{
        return (
            <div key={campus.id}>
              <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
              <button onClick={() => handleOnClick(campus.id)}>X</button>
              <br/>
              <img src={campus.imageUrl} height="42" width="42"/>
            </div>
            )
      }): (<div>No campuses currently established.</div>)}
      <br/>
      <CampusPoster/>
    </div>
  	)
}

const mapStateToProps = (state) => ({
  campuses: state.campusesObj.campuses
});

const mapDispatchToProps = (dispatch) => ({
  handleOnClick (id){ 
    dispatch(deleteCampusAndUpdate(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CampusList);