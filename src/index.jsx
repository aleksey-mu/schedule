import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Button } from 'antd';

import './index.scss';
import 'antd/dist/antd.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import TaskCard from './components/task-card/TaskCard'

function App() {
	return (
		<div>
			<div>Hello!</div>
			<Button type='primary'>Primary Button</Button>
			<TaskCard />
		</div>
	);
}

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
