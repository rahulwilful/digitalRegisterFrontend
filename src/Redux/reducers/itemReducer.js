import {ADD_ITEM, SET_ITEMS} from '../constants';

const initialItems = [];

export const itemReducer = (state = initialItems, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return action.data;
    case ADD_ITEM:
      return [...state, action.data];
    default:
      return state;
  }
};
