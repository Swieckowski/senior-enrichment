import React, { Component } from "react";
import { withRouter, Link} from 'react-router-dom';
import { connect } from "react-redux";

const SingleStudent = (props) => {

  //variable for clarity
  const student = props.student;
  if(student){
    return (
    	<div>
        <h1>{student.firstName + " " + student.lastName}</h1>
        <br/>
        <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link>
        <br/>
        {student.campus.location}
        <br/>
        <img src={student.campus.imageUrl} height="42" width="42"/>
    	</div>
    	) 
  } else return null;

}

//Using withRouter in conjunction with ownProps to map only the necessary campus to props
const mapStateToProps = (state, ownProps) => ({
  student: state.studentsObj.students.find((student)=> student.id === parseInt(ownProps.match.params.studentId))
});

export default withRouter(connect(mapStateToProps)(SingleStudent));