import React from "react";

const CampusForm = (props) => {
  return (
      <div>
        <form onSubmit={evt => props.submitHandler(evt)}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={props.state.name}
              onChange={props.handleChange}
            />
            <br/>
            <label htmlFor="location">Location:</label>
            <input
              id="location"
              type="text"
              name="location"
              value={props.state.location}
              onChange={props.handleChange}
            />
            <br/>
            <label htmlFor="image">ImageUrl:</label>
            <input
              id="image"
              type="text"
              name="imageUrl"
              value={props.state.imageUrl}
              onChange={props.handleChange}
            />
            <br/>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
  	)

}

export default CampusForm;