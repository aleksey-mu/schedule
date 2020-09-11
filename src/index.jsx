import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
// import { Button } from 'antd';
import Header from './сomponents/Header/Header';
import MainConteiner from './сomponents/MainConteiner/MainContainer';
import SideBar from './сomponents/SideBar/SideBar';

import styles from './App.module.css';
import 'antd/dist/antd.css';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

function App() {
	return (
		<div className={styles.container}>
			<SideBar />
			<Header />
			<MainConteiner />
		</div>
	);
}

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
