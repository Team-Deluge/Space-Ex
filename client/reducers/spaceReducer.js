import * as types from '../actions/actions';

const spaceReducer = (state = { spaces: [] }, action) => {
  switch (action.type) {
    case types.GET_SPACES:
      fetch('/getSpaces', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: { user_id: action.user_id },
      }).then(spaces => Object.assign({}, state, { spaces }));
      break;
    case types.DELETE_SPACE:
      fetch('/deleteSpace', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: { space_id: action.space_id, user_id: action.user_id },
      }).then(spaces => Object.assign({}, state, { spaces }));
      break;
    case types.ADD_SPACE:
      fetch('/addSpace', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: { user_id: action.user_id },
      }).then(spaces => Object.assign({}, state, { spaces }));
      break;
    default:
      return state;
  }
};

export default spaceReducer;
