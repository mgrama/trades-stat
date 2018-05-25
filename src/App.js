import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {fetchTrades} from './actions/trades';

class App extends Component {




componentDidMount = () => {
  /*const URL='https://api.bitflip.cc/method/market.getTrades';
  axios.post(URL, {pair: 'btc:usd'}).then((resp) => {console.log(resp)})*/
  this.props.fetchTrades('btc:usd');
}



  handleClick = (event) => {
    this.props.updateKey(event.target.value);
  }

  handleFocus = () => {
    this.props.updateKey('жопа');
  }

  handleBlur = () => {
    this.props.updateKey('');
  }

  render() {
    return (
      <form>
        <button
          //onClick={}
          >
          BTC / USD
        </button>
        <button
          //onClick={}
          >
          LTC / USD
        </button>
        <button
          //onClick={}
          >
          ETH / USD
        </button>
        <input
          onChange={this.handleClick}
          value={this.props.input}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
         />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({input: state.input.input});

const mapDispatchToProps = {fetchTrades};

export default connect(mapStateToProps, mapDispatchToProps)(App);
