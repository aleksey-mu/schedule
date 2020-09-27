import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Table, Button } from 'antd';

import './index.scss';
import 'antd/dist/antd.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import columns from './components/tableComponents/columns';
import getAllEvents  from './actions/httpRequests/getAllEvents';

const teamId = "group51";
const baseURL = "https://rs-react-schedule.firebaseapp.com/api";

function App() {

	const [data, setData] = useState(null);
	const [user, setUser] = useState("student");

	async function logEvents() {
		const events = await getAllEvents(baseURL, teamId);
		const gettingData = events.data;
		const sortData = gettingData.sort((a, b) => { 
			const first = a.dateTime;
			const second = b.dateTime;
			let result = 0;
			if (first > second) result =  1;
			if (first < second) result = -1;
			return result;  
		});

		const indexData = sortData.map((object, index) => { 
			const currentObject =  { ...object };
			currentObject.index = index + 1;
			currentObject.data = { ...object, user  };
			return currentObject;
		});
		setData(indexData);
	}
	logEvents();

	return (
		<div> 
			<div className="user">
				<div>
					<p>Пользователь: {user}</p>
					<Button onClick={() => setUser(user === "student" ? "mentor" : "student")}>
						сменить пользователя
					</Button>
				</div>
			</div>
			{ data &&
			<Table 
				dataSource={data} 
				columns={columns} 
			/>
			}
		</div>
		
	);
}

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
