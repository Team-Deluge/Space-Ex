import * as types from '../constants/actionTypes';

const eventReducer = (state = {
  confirmedEvents: [],
  pendingEvents: [],
}, action) => {
  switch (action.type) {

    case types.GET_CONFIRMED_EVENTS:
      if (action.payload.userType === 'renter') {
        fetch('/getConfirmedEventsRenter', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: { renter_user_id: JSON.stringify(action.payload.user_id) },
        }).then(confirmedEvents => Object.assign({}, state, { confirmedEvents }));
      } else if (action.payload.userType === 'owner') {
        fetch('/getConfirmedEventsOwner', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: { owner_user_id: JSON.stringify(action.payload.user_id) },
        }).then(confirmedEvents => Object.assign({}, state, { confirmedEvents }));
      }
      break;

    case types.GET_PENDING_EVENTS:
      if (action.payload.userType === 'renter') {
        fetch('/getPendingEventsRenter', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: { renter_user_id: JSON.stringify(action.payload.user_id) },
        }).then(pendingEvents => Object.assign({}, state, { pendingEvents }));
      } else if (action.payload.userType === 'owner') {
        fetch('/getConfirmedEventsOwner', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: { owner_user_id: JSON.stringify(action.payload.user_id) },
        }).then(pendingEvents => Object.assign({}, state, { pendingEvents }));
      }
      break;

    case types.ADD_EVENT:
      fetch('/addEvent', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(action.payload)
      })
      
    default:
      return state;
  }
}

