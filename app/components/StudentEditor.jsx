import React, { Component } from "react";
import { connect } from "react-redux";
import {updateStudent} from "../reducers/studentReducer";

class StudentEditor extends Component {
  constructor(props) {
    super(props);
    this.state ={
        firstName: "",
        lastName: "",
        campusId: this.props.student.campus.id
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const value = event.target.value
    const inputElement = event.target.name
    this.setState({[inputElement]: value})

  }

  render() {

    const handleChange = this.handleChange;
    const handleSubmit = this.props.handleSubmit;
    const campuses = this.props.campuses;

    return (
      <div>
        Edit student information
        <form 
          onSubmit={evt => {
            handleSubmit(this.state, evt);
            this.setState({firstName:"",lastName:""})
          }
          }>
          <div>
            <label htmlFor="firstName">First name:</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={handleChange}
            />
            <br/>
            <label htmlFor="lastName">Last name:</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={handleChange}
            />
            <br/>
            <label htmlFor="campus">Campus:</label>
            <select
              id="campus"
              name="campusId"
              value={this.state.campusId}
              onChange={handleChange}
            >
              {campuses && campuses.map((campus)=>{
                return (
                  <option key={campus.id} value={campus.id}>{campus.name}</option>
                  )
              })}
            </select>
            <br/>
            <button type="submit">Submit</button>
          </div>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  campuses: state.campusesObj.campuses
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit(state, evt){
    evt.preventDefault();
    dispatch(updateStudent(ownProps.id, state));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentEditor);