import * as types from '../constants/actionTypes';

const eventReducer = (state = {
  confirmedEvents: [],
  unconfirmedEvents: [],
}, action) => {
  switch (action.type) {
    case types.GET_CONFIRMED_EVENTS:
      if (action.userType === 'renter') {
        fetch('/getConfirmedEvents', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: { RenterID: action.user_id },
        })
      }
      
      break;
    default:
      return state;
  }
}

