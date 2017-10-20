import React, { Component } from "react";
import { withRouter, Link} from 'react-router-dom';
import { connect } from "react-redux";
import {deleteStudentAndUpdate} from "../reducers/studentReducer";
import StudentEditor from "./StudentEditor";


const SingleStudent = (props) => {

  //variable for clarity
  const {student, handleOnClick} = props;

  if(student){
    return (
    	<div>
        <h1>{student.firstName + " " + student.lastName}<button onClick={() => handleOnClick(student.id)}>X</button></h1>
        
        <br/>
        Campus: <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link>
        <br/>
        Location: {student.campus.location}
        <br/>
        <img src={student.campus.imageUrl} height="42" width="42"/>
        <StudentEditor student={student} id={student.id}/>
    	</div>
    	) 
  } else return null;

}

//Using withRouter in conjunction with ownProps to map only the necessary student to props
const mapStateToProps = (state, ownProps) => ({
  student: state.studentsObj.students.find((student)=> student.id === parseInt(ownProps.match.params.studentId))
});

//handleOnClick deletes a student then redirects to the students page
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleOnClick (id){ 
    dispatch(deleteStudentAndUpdate(id, ownProps.history));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent));