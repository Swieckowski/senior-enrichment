import { combineReducers } from 'redux'
import campusesObj from './campusReducer';
import studentsObj from './studentReducer';

//combines all reducers
export default combineReducers({
	campusesObj,
	studentsObj
})
