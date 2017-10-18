import { combineReducers } from 'redux'
import campuses from './campusReducer';

const initialState = {}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

export default combineReducers({
	rootReducer,
	campuses
})
