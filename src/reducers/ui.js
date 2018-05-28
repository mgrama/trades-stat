import {SET_FETCHING, SET_FETCHING_ERROR} from '../actions/types';

const DEFAULT = {
    isFetching: false,
    fetchingError: ''
};

const ui = (state = DEFAULT, action) => {
  switch (action.type) {
    case SET_FETCHING:
      return {
          ...state, isFetching: action.payload, fetchingError: ''
      }
    case SET_FETCHING_ERROR:
      return {
          ...state, fetchingError: action.payload, isFetching: false
      }
    default: return state
  }

}

export default ui;
