import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import './App.css';
import {fetchTrades} from './actions/trades';

class App extends Component {


handleBTCUSDClick = (event) => {
  event && event.preventDefault();
  this.props.fetchTrades('btc:usd');
}

handleLTCUSDClick = (event) => {
  event && event.preventDefault();
  this.props.fetchTrades('ltc:usd');
}

handleETHUSDClick = (event) => {
  event && event.preventDefault();
  this.props.fetchTrades('eth:usd');
}

renderRows = () => {
  const {trades, isFetching} = this.props;
  if (!isFetching) {
    return Object.values(trades)
      .filter((trade) => trade.timestamp * 1000 > moment().subtract(1, 'day').valueOf())
      .map((trade) => (
      <tr key={trade.id}>
        <td>{trade.type.toUpperCase()}</td>
        <td>{trade.amount}</td>
        <td>{trade.rate}</td>
        <td>{trade.price}</td>
        <td>{moment.unix(trade.timestamp).format('YYYY-MM-DD HH:mm:ss')}</td>
      </tr>
    ))
  }
  return (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
}

renderLoader = () => {
  const {isFetching} = this.props;
  if (isFetching) {
    return <div>LOADING...</div>;
  }
  return null;
}

renderError = () => {
  const {fetchingError} = this.props;
  if (fetchingError) {
    return <div>SOMETHING WENT WRONG, TRY AGAIN</div>;
  }
}

  render() {
    return (
      <div className="Container">
        <form>
          <button onClick={this.handleBTCUSDClick}>
            BTC / USD
          </button>

          <button onClick={this.handleLTCUSDClick}>
            LTC / USD
          </button>

          <button onClick={this.handleETHUSDClick}>
            ETH / USD
          </button>
        </form>

        <br />

        <table>
          <tbody>
            <tr>
              <th>Operation</th>
              <th>Amount</th>
              <th>Rate</th>
              <th>Price</th>
              <th>Time</th>
            </tr>
            {this.renderRows()}
          </tbody>
        </table>

        {this.renderLoader()}
        {this.renderError()}

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  trades: state.trades,
  isFetching: state.ui.isFetching,
  fetchingError: state.ui.fetchingError
})

const mapDispatchToProps = {fetchTrades};

export default connect(mapStateToProps, mapDispatchToProps)(App);
