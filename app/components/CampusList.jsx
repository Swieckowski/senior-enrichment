import React, { Component } from "react";
import { connect } from "react-redux";

const CampusList = (props) => {

  //variable for clarity
  const campusesArr = props.campuses;

  return (
    <div>
      {campusesArr.map((campus)=>{
        return (
            <div key={campus.id}>
              <img src={campus.imageUrl} height="42" width="42"/>
              <br/>
              {campus.name}
            </div>
            )
      })}
    </div>
  	)

}

const mapStateToProps = (state) => ({
  campuses: state.campusesObj.campuses
});

export default connect(mapStateToProps)(CampusList);