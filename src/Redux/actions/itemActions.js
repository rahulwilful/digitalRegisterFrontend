import {ADD_ITEM, SET_ITEMS} from '../constants';

export const addAllItems = item => ({type: SET_ITEMS, data: item});

export const addItem = item => ({type: ADD_ITEM, data: item});
