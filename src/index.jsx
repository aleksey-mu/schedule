import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import './index.scss';
import 'antd/dist/antd.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import TaskCard from './components/task-card/TaskCard'
import LectureCard from './components/lectureCard/LectureCard'

function App() {

	return (
		<div>
			<TaskCard />
			<LectureCard/>
		</div>
	);
}

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
