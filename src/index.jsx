import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import './index.scss';
import 'antd/dist/antd.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

function App() {
	return (
		<div>
			<div>Hello!</div>
		</div>
	);
}

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
