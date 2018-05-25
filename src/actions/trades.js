import axios from 'axios';
const URL='https://api.bitflip.cc/method/market.getTrades';


export const fetchTrades = (pair) => {
  return (dispatch) => {
    axios.post(URL, {pair})
      .then((resp) => {
        console.log(resp)
      })
  }
}
