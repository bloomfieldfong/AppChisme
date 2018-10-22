import { combineReducers } from 'redux';
import * as types from '../types/chisme';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.CHISME_ADDED:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          isConfirmed: false,
        },
      };
    case types.CHISME_REMOVED: {
      const newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    }
    default:
      return state;
  }
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.CHISME_ADDED:
      return [...state, action.payload.id];
    case types.CHISME_REMOVED:
      return state.filter(id => id !== action.payload.id);
    default:
      return state;
  }
};


export default combineReducers({
  byId,
  order,
});


export const getChisme = (state, id) => state.byId[id];
export const getChismeIds = (state) => state.order;
export const getChismes = (state) => state.order.map(
  id => getChisme(state, id),
);
