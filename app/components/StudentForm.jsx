import React from "react";

const StudentForm = (props) => {
  return (
        <div>
          <form onSubmit={evt => props.submitHandler(evt)}>
            <div>
              <label htmlFor="firstName">First name:</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={props.state.firstName}
                onChange={props.handleChange}
              />
              <br/>
              <label htmlFor="lastName">Last name:</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={props.state.lastName}
                onChange={props.handleChange}
              />
              <br/>
              <label htmlFor="campus">Campus:</label>
              <select
                id="campus"
                name="campusId"
                value={props.state.campusId}
                onChange={props.handleChange}
              >
                {props.campuses && props.campuses.map((campus)=>{
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

export default StudentForm;