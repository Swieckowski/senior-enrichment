import React, { Component } from "react";
import { connect } from "react-redux";
import {addStudent} from "../reducers/studentReducer";
import StudentForm from "./StudentForm";

class StudentEditor extends Component {
  constructor(props) {
    super(props);
    this.state ={
        firstName: "",
        lastName: "",
        campusId: this.props.campuses[0].id
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler =this.submitHandler.bind(this);
  }

  handleChange(event){
    const value = event.target.value
    const inputElement = event.target.name
    this.setState({[inputElement]: value})
  }

  submitHandler(evt){
    evt.preventDefault();
    this.props.handleSubmit(this.state, evt);
    this.setState({firstName:"",lastName:""});
  }

  render() {

    const handleChange = this.handleChange;
    const submitHandler = this.submitHandler;
    const campuses = this.props.campuses;

      return (
        <div>
          Add new student:
          <StudentForm 
            handleChange={handleChange}
            submitHandler={submitHandler}
            campuses={campuses}
            state={this.state}
          />
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
  campuses: state.campusesObj.campuses
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit(student, evt){
    dispatch(addStudent(student));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentEditor);