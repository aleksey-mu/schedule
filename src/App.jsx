import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Layout} from 'antd';
import clsx from 'clsx';

import HeaderContainer from './сomponents/HeaderContainer/HeaderContainer';
import MainConteiner from './сomponents/MainContainer/MainContainer';
import SideBar from './сomponents/SideBar/SideBar';
import TopHeader from './сomponents/TopHeader/TopHeader';

import styles from './App.module.scss';

const App = () => {
	return (
		<Router>
		<TopHeader />
		<Layout style={{ minHeight: '100vh' }}>			
			<SideBar />
			<Layout className={clsx('site-layout', styles.content)}>
				<HeaderContainer />
				<MainConteiner />
			</Layout>		 	
		</Layout>
		</Router>
	);
}

export default App;
