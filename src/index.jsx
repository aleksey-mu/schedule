import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Table } from 'antd';

import './index.scss';
import 'antd/dist/antd.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import columns from './components/tableComponents/columns';
import { tableData } from './components/tableComponents/tableData';

// import TaskCard from './components/card-components/task-card/TaskCard'
// import LectureCard from './components/card-components/lectureCard/LectureCard'

function App() {

	

	return (
		<div>
			{/* <TaskCard /> */}
			<Table dataSource={tableData} columns={columns} />
		</div>
		
	);
}

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
