import { createStore, applyMiddleware, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const firebaseConfig = {
  apiKey: 'AIzaSyCJc2rrvhklu3e1V2f-_CpenglRSlpwxVM',
  authDomain: 'where-time-goes.firebaseapp.com',
  databaseURL: 'https://where-time-goes.firebaseio.com',
  projectId: 'where-time-goes',
  storageBucket: 'where-time-goes.appspot.com',
  messagingSenderId: '726586632548',
};
// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
};
// Implement dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithFirebase = compose(reactReduxFirebase(firebase, rrfConfig))(createStore);

export default createStoreWithFirebase(reducers, composeEnhancers(applyMiddleware(thunk)));
