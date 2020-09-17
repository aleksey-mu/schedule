import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from "react-router-dom";
import Schedule from '../Schedule/Schedule';
import TaskCart from '../TaskCart/TaskCart';

const { Content } = Layout;

const MainContainer = () => {
    return (
        <Content style={{ margin: '0 16px', background: '#fff', padding: '16px' }}>
            <Switch>
                <Route exact path="/" component={Schedule} />
                <Route path="/task/:id" component={TaskCart} />
            </Switch>      
        </Content>
    );
}

export default MainContainer;