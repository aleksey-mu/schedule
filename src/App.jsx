import React from 'react';
import { Layout} from 'antd';

import HeaderContainer from './сomponents/HeaderContainer/HeaderContainer';
import MainConteiner from './сomponents/MainContainer/MainContainer';
import SideBar from './сomponents/SideBar/SideBar';
import TopHeader from './сomponents/TopHeader/TopHeader';

const App = () => {
	return (
		<>
		<TopHeader />
		<Layout style={{ minHeight: '100vh' }}>			
			<SideBar />
			<Layout className="site-layout">
				<HeaderContainer />
				<MainConteiner />
			</Layout>		 	
		</Layout>
		</>
	);
}

export default App;
