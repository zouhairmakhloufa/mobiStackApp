import { configureStore } from "@reduxjs/toolkit";

// store.js

import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer'; // Votre authReducer

const rootReducer = combineReducers({
  userData: authReducer,
  // Ajoutez d'autres reducers si nécessaire
});

const store = createStore(rootReducer);

export default store;
