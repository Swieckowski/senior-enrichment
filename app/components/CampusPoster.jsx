import React, { Component } from "react";
import { connect } from "react-redux";
import {addCampus} from "../reducers/campusReducer";
import CampusForm from "./CampusForm";

class CampusPoster extends Component {
  constructor(props) {
    super(props);
    this.state ={
        name: "",
        location: "",
        imageUrl: ""
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
    this.setState({name:"",location:"",imageUrl:""});
  }

  render() {
    const handleChange = this.handleChange;
    const submitHandler = this.submitHandler;

    return (
      <div>
          Add new campus:
          <CampusForm 
            handleChange={handleChange}
            submitHandler={submitHandler}
            state={this.state}
          />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit(student, evt){
    dispatch(addCampus(student));
  }
});

export default connect(null,mapDispatchToProps)(CampusPoster);