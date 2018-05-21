import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import SimpleReducer from './simpleReducer';

export default combineReducers({ SimpleReducer, firebaseReducer });
