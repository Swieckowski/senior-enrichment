import axios from "axios";
import {loadStudents} from "./studentReducer";
import {objectDiscriminator} from "./helperFunction"

const initialState = {campuses:[]};

//Action Type
const GOT_CAMPUSES ="GOT CAMPUSES";

//Action Creator
const campusLoader = (data) => {
	return {
		type: GOT_CAMPUSES,
		payload: data
	}
}

//Thunk Creators
export const loadCampuses = () => dispatch => {
	axios.get("/api/campus/")
	.then(response => response.data)
	.then(data => dispatch(campusLoader(data)))
	.catch(error=>console.log(error));
}

//The following Thunks make sure to update both students and campuses 
// in the store after they've finished updating/deleting/etc.
export const deleteCampusAndUpdate = (id, history=[]) => dispatch => {
	axios.delete(`/api/campus/${id}`)
	.then((response) =>response.data)
	.then(data => {
		history.push('/');
		dispatch(loadStudents());
		dispatch(loadCampuses());
	})
	.catch(error=>console.log(error));
}

export const updateCampus = (id, update) => dispatch => {
	// Gets rid of keys with empty string values
	update = objectDiscriminator(update);
	axios.put(`/api/campus/${id}`, update)
	.then((response) =>response.data)
	.then(data => {
		dispatch(loadStudents());
		dispatch(loadCampuses());
	})
	.catch(error=>console.log(error));
}

export const addCampus = (campus) => dispatch => {
	axios.post('/api/campus/', campus)
	.then((response) =>response.data)
	.then(data => {
		dispatch(loadStudents());
		dispatch(loadCampuses());
	})
	.catch(error=>console.log(error));
}


//Reducer
const campusesObj = function(state = initialState, action) {
  switch(action.type) {
  	case GOT_CAMPUSES:
  		const newState = Object.assign({}, state, {campuses: action.payload})
  		return newState;
    default: return state
  }
};


export default campusesObj;
