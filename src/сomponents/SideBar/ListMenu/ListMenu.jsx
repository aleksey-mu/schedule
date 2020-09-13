import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';

import MenuIcon from './MenuIcon/MenuIcon';
import styles from './ListMenu.module.scss';

const ListMenu = ({ data }) => {
    const { dataMenuItems } = data;
    const menuItem = dataMenuItems.map(item => {
        return (           
                <Menu.Item key={item.id} icon={<MenuIcon icon={item.icon}/>} className={styles.menuItem}>
                    {item.title}
                </Menu.Item>            
        );
    })
    return (
        <div className={styles.container}>
            <Menu 
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
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