import React, { Component } from "react";
import { connect } from "react-redux";

const StudentList = (props) => {

  //variable for clarity
  const studentsArr = props.students;

  return (
  	<div>
  		<ul>
  			{studentsArr.map((student) => {
  				return (
  					<li key={student.id}>{student.firstName+" "+student.lastName}</li>
  					)
  			})}
  		</ul>
  	</div>
  	)

}

const mapStateToProps = (state) => ({
  students: state.studentsObj.students
});

export default connect(mapStateToProps)(StudentList);
