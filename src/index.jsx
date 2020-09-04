import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import './index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

function App() {
	return <div>Hello!</div>;
}

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
