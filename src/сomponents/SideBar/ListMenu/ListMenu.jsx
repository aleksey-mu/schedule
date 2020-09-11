import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Button } from 'antd';
// import {
//     ToggleMenuIcon
// } from '../../Icons/Icon';
import {
    MenuOutlined,
    // DashboardOutlined
  } from '@ant-design/icons';

import MenuIcon from './MenuIcon/MenuIcon';
import styles from './ListMenu.module.scss';

// const { SubMenu } = Menu;

const ListMenu = ({ data }) => {
    const [collapsed, setCollapsed] = useState(true)
    const { dataMenuItems } = data;
    const menuItem = dataMenuItems.map(item => {
        return (           
                <Menu.Item key={item.id} icon={<MenuIcon icon={item.icon}/>}>
                    {item.title}
                </Menu.Item>            
        );
    })
    const handleClick = () => {
        return setCollapsed(!collapsed)
    }
    return (
        <div className={styles.container}>
            <Button type="dashed" onClick={handleClick} icon={<MenuOutlined style={{ fontSize: '20px', lineHeight: 'unset' }}/>} style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}/>
            <Menu 
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
            >
                {menuItem}
            </Menu>
        </div>
    );
}

ListMenu.propTypes = {
    data: PropTypes.shape({
        dataMenuItems: PropTypes.arrayOf(PropTypes.shape)
    }),
}

ListMenu.defaultProps = {
    data: {},
};

export default ListMenu;