import {combineReducers} from 'redux';
import trades from './trades';
import ui from './ui';

export default combineReducers({
  trades,
  ui
})
