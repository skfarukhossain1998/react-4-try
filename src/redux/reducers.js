// src/redux/reducers.js

import { combineReducers } from 'redux';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './actions';


const initialState = {
  posts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return { ...state, posts: action.payload };
    case 'FETCH_POSTS_FAILURE':
      return state;
    default:
      return state;
  }
};


export default rootReducer;
