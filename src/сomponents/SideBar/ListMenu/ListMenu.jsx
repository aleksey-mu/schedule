import React from 'react';
import { shape, arrayOf } from 'prop-types';
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
                defaultSelectedKeys={['3']}
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
    data: shape({
        dataMenuItems: arrayOf(shape)
    }),
}

ListMenu.defaultProps = {
    data: null,
};

export default ListMenu;