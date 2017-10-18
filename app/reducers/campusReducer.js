import axios from "axios";

const initialState = {campuses:[]};

const GOT_CAMPUSES ="GOT CAMPUSES";

const campusLoader = (data) => {
	return {
		type: GOT_CAMPUSES,
		payload: data
	}
}

export const loadCampuses = () => dispatch => {
	axios.get("/api/campus/")
	.then(response => response.data)
	.then(data =>{
		dispatch(campusLoader(data))
	})
	.catch(error=>console.log(error));
}

const campuses = function(state = initialState, action) {
  switch(action.type) {
  	case GOT_CAMPUSES:
  		const newState = Object.assign({}, state, {campuses: action.payload})
  		return newState;
    default: return state
  }
};

export default campuses;
