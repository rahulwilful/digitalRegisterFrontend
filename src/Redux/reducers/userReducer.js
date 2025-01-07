import {ADD_USER} from '../constants';

const initialUser = null;

export const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.data;
    default:
      return state;
  }
};
