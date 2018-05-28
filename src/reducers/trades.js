import {PUT_TRADES} from '../actions/types';

const DEFAULT = {};

const trades = (state = DEFAULT, action) => {
  switch (action.type) {
    case PUT_TRADES:
      return Object.assign({}, state, action.payload)
    default: return state
  }

}

export default trades;
