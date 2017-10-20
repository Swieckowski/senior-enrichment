import React, { Component } from "react";
import { connect } from "react-redux";
import {deleteStudentAndUpdate} from "../reducers/studentReducer";
import { withRouter, Link} from 'react-router-dom';


const StudentList = (props) => {

  //variable for clarity
  const {students, handleOnClick} = props;

  return (
  	<div>
  		<ul>
  			{students.length? students.map((student) => {
  				return (
  					<li key={student.id}>
              <Link to={`/student/${student.id}`}>{student.firstName+" "+student.lastName}</Link>
              <button onClick={() => handleOnClick(student.id)}>X</button>
            </li>
  					)
  			}):(<div>No students currently enrolled at any campuses.</div>)}
  		</ul>
  	</div>
  	)

}

const mapStateToProps = (state) => ({
  students: state.studentsObj.students
});

const mapDispatchToProps = (dispatch) => ({
  handleOnClick (id){ 
    dispatch(deleteStudentAndUpdate(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
