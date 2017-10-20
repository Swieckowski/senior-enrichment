import React, { Component } from "react";
import { connect } from "react-redux";
import {updateCampus} from "../reducers/campusReducer";

class CampusEditor extends Component {
  constructor(props) {
    super(props);
    this.state ={
        name: "",
        location: "",
        imageUrl: ""
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
    return (
      <div>
        Edit campus details
        <form 
          onSubmit={evt => {
            handleSubmit(this.state, evt);
            this.setState({name:"",location:"",imageUrl:""})
          }
          }>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={handleChange}
            />
            <br/>
            <label htmlFor="location">Location:</label>
            <input
              id="location"
              type="text"
              name="location"
              value={this.state.location}
              onChange={handleChange}
            />
            <br/>
            <label htmlFor="image">ImageUrl:</label>
            <input
              id="image"
              type="text"
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={handleChange}
            />
            <br/>
            <button type="submit">Submit</button>
          </div>
        </form>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit(state, evt){
    evt.preventDefault();
    dispatch(updateCampus(ownProps.id, state));
  }
});

export default connect(null,mapDispatchToProps)(CampusEditor);