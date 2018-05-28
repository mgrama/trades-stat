import axios from 'axios';
import {PUT_TRADES, SET_FETCHING, SET_FETCHING_ERROR} from './types'
const URL='https://api.bitflip.cc/method/market.getTrades';


export const fetchTrades = (pair) => {
  return (dispatch) => {
    dispatch({type: SET_FETCHING, payload: true});
    axios.post(URL, {pair})
      .then((response) => {
        dispatch({
          type: SET_FETCHING,
          payload: false
        });
        dispatch({
            type: PUT_TRADES,
            payload: response.data[1]
        })
      })
      .catch((error) => {
        dispatch({
          type: SET_FETCHING_ERROR,
          payload: error
        })
      })
  }
}
