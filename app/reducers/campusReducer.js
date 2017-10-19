import axios from "axios";

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

export const deleteCampusAndUpdate = (id, history) => dispatch => {
	axios.delete(`/api/campus/${id}`)
	.then((response) =>response.data)
	.then(data => {
		history.push('/')
		return dispatch(loadCampuses())
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
