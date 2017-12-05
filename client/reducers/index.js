// import all reducer js files
import { combineReducers } from 'redux';

// each reducer should have its initial state within its js file.
// Use a default parameter to pass this into reducer.
// reducers take the current state and an action object as parameters.
// reducers then have a switch statement with cases for each action type (from actionTypes.js).

const reducers = combineReducers({
  // list all reducers here
});


export default reducers;
