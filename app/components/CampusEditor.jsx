import React, { Component } from "react";
import { connect } from "react-redux";
import {updateCampus} from "../reducers/campusReducer";
import CampusForm from "./CampusForm";

class CampusEditor extends Component {
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
        Edit campus details
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
  handleSubmit(state, evt){
    dispatch(updateCampus(ownProps.id, state));
  }
});

export default connect(null,mapDispatchToProps)(CampusEditor);