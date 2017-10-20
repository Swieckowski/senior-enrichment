import axios from "axios";
import {loadCampuses} from "./campusReducer";
import {objectDiscriminator} from "./helperFunction"


const initialState = {students:[]};

//Action Type
const GOT_STUDENTS ="GOT STUDENTS";

//Action Creator
const studentLoader = (data) => {
	return {
		type: GOT_STUDENTS,
		payload: data
	}
}

//Thunk Creators
export const loadStudents = () => dispatch => {
	axios.get("/api/student/")
	.then(response => response.data)
	.then(data =>dispatch(studentLoader(data)))
	.catch(error=>console.log(error));
}

export const deleteStudentAndUpdate = (id, history=[]) => dispatch => {
	axios.delete(`/api/student/${id}`)
	.then((response) =>response.data)
	.then(data => {
		history.push("/students");
		// This Thunk dispatches the loadStudents Thunk to automatically update the store
		// without the deleted students as well as any other possible changes to the database
		dispatch(loadCampuses());
		dispatch(loadStudents());
	})
	.catch(error=>console.log(error));
}

export const updateStudent = (id, update) => dispatch => {
	// Gets rid of keys with empty string values
	update = objectDiscriminator(update);
	axios.put(`/api/student/${id}`, update)
	.then((response) =>response.data)
	.then(data => {
		dispatch(loadStudents());
		dispatch(loadCampuses());
	})
	.catch(error=>console.log(error));
}

//Reducer
const studentsObj = function(state = initialState, action) {
  switch(action.type) {
  	case GOT_STUDENTS:
  		const newState = Object.assign({}, state, {students: action.payload})
  		return newState;
    default: return state
  }
};

export default studentsObj;
