import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";
import {deleteCampusAndUpdate} from "../reducers/campusReducer";
import {deleteStudentAndUpdate} from "../reducers/studentReducer";
import CampusEditor from "./CampusEditor";

const SingleCampus = (props) => {

  //variables for clarity
  const {campus, handleOnClickStudent, handleOnClickCampus} = props;

  if(campus){
    return (
    	<div>
        <h1>{campus.name}<button onClick={() => handleOnClickCampus(campus.id)}>X</button></h1>
        <br/>
        Location: {campus.location}
        <br/>
        <img src={campus.imageUrl} height="84" width="84"/>
        <br/>
        <br/>
        Current students:
    		<ul>
    			{campus.students.length? campus.students.map((student) => {
    				return (
    					<li key={student.id}>
                <Link to={`/student/${student.id}`}>{student.firstName+" "+student.lastName}</Link>
                <button onClick={() => handleOnClickStudent(student.id)}>X</button>
              </li>
    					)
    			}): (<div>No students currently enrolled.</div>)}
    		</ul>
        <CampusEditor id={campus.id}/>
    	</div>
    	) 
  } else return null;

}

//Using withRouter in conjunction with ownProps to map only the necessary campus to props
const mapStateToProps = (state, ownProps) => ({
  campus: state.campusesObj.campuses.find((campus)=> campus.id === parseInt(ownProps.match.params.campusId)),
});

//handleOnClick deletes a campus then redirects to the homepage, where the campus view is the default
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleOnClickCampus (id){ 
    dispatch(deleteCampusAndUpdate(id, ownProps.history));
  },
  handleOnClickStudent (id){ 
    dispatch(deleteStudentAndUpdate(id));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCampus));