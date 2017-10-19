import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";
import {deleteCampusAndUpdate} from "../reducers/campusReducer";



const SingleCampus = (props) => {

  //variable for clarity
  const {campus, handleOnClick} = props;

  if(campus){
    return (
    	<div>
        <h1>{campus.name}</h1>
        <br/>
        {campus.location}
        <br/>
        <img src={campus.imageUrl} height="42" width="42"/>
        <button onClick={() => handleOnClick(campus.id)}>X</button>
    		<ul>
    			{campus.students.map((student) => {
    				return (
    					<li key={student.id}>
                <Link to={`/student/${student.id}`}>{student.firstName+" "+student.lastName}</Link>
              </li>
    					)
    			})}
    		</ul>
    	</div>
    	) 
  } else return null;

}

//Using withRouter in conjunction with ownProps to map only the necessary campus to props
const mapStateToProps = (state, ownProps) => ({
  campus: state.campusesObj.campuses.find((campus)=> campus.id === parseInt(ownProps.match.params.campusId))
});

//handleOnClick deletes a campus then redirects to the homepage, where the campus view is the default
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleOnClick (id){ 
    dispatch(deleteCampusAndUpdate(id, ownProps.history));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCampus));