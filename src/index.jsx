import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Table, Button, Modal, Dropdown, Menu, Checkbox } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import './index.scss';
import 'antd/dist/antd.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import columns from './components/tableComponents/columns';
import getAllEvents  from './actions/httpRequests/getAllEvents';
import ChangeTaskCard from "./components/changeTaskCard/changeTaskCard";

const teamId = "group51";
const baseURL = "https://rs-react-schedule.firebaseapp.com/api";

function App() {

	const [data, setData] = useState(null);
	const [user, setUser] = useState("student");
	const [showModal, setShowModal] = useState(false);
	const [visibleColumns, setVisibleColumns] = useState(columns.map(() => true));

	function changeVisibleMenu(index) {
		visibleColumns[index] = !visibleColumns[index];
		setVisibleColumns(visibleColumns);
	}

	const menu = (
		<Menu>
			{columns.map((column, index) => {
			   		return <Menu.Item>
						   		<Checkbox
									checked={visibleColumns[index]}
									onChange={() => changeVisibleMenu(index)}
								>
									{column.title}
								</Checkbox>
						   </Menu.Item>
				})
			}
		</Menu>
	  );

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

	function changeColumns(dataColumn) {
		const newDataColumn = [];
		for (let i = 0; i < dataColumn.length; i += 1) {
			if (visibleColumns[i]) {
				newDataColumn.push(dataColumn[i]);
			}
		}
		return newDataColumn;
	}

	return (
		<div> 
			<div className="user">
				<div style={{marginRight: "20px"}}>
					<Dropdown overlay={menu}>
						<span>
						Изменить видимость колонок<DownOutlined />
						</span>
					</Dropdown>
				</div>
				<div>
					<p>Пользователь: {user}</p>
					<Button onClick={() => setUser(user === "student" ? "mentor" : "student")}>
						сменить пользователя
					</Button>
				</div>
			</div>
			{ user === "mentor" && 
			<div>
				<Button type="button" onClick={() => setShowModal(!showModal)}>
					Добавить новую карточку
				</Button>
				<Modal
					visible={showModal}
					onOk={() => setShowModal(!showModal)}
					onCancel={() => setShowModal(!showModal)}
					width="fit-content"
					closable="false"
					style={{ top: 10, left: 0 }}
				>
					<ChangeTaskCard dataTask={{user}}/>
				</Modal>
			</div>
			}
			{ data &&
			<Table 
				dataSource={data} 
				columns={changeColumns(columns)} 
			/>
			}
		</div>
		
	);
}

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
