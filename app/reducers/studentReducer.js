import axios from "axios";

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

//Thunk Creator
export const loadStudents = () => dispatch => {
	axios.get("/api/student/")
	.then(response => response.data)
	.then(data =>{
		dispatch(studentLoader(data))
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
