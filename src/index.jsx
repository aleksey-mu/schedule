import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import toggleMenuReducer from "./Redux/menuReducers";
import roleReducer from "./Redux/roleReducers";

import App from './App';
import 'antd/dist/antd.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const store = configureStore({
	reducer: {
		toggleMenu: toggleMenuReducer,
		userRole: roleReducer
	},
});

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<Provider store={store}><AppWithHot /></Provider>, mountNode);
