import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from 'antd';
import {
    MenuOutlined
  } from '@ant-design/icons';
import styles from './SideBar.module.scss';

import Logo from '../common/Logo/Logo';
import dataMenuItems from '../../dataSourсe/data';
import ListMenu from './ListMenu/ListMenu';
import { toggleMenuSet } from '../../Redux/menuReducers';

const { Sider } = Layout;

const SideBar = () => {
    const dispatch = useDispatch();
    const collapsed = useSelector(state => state.toggleMenu.collapsed);
    const onCollapse = () => {
        dispatch(toggleMenuSet(!collapsed));
    }
    return (
        <>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} trigger={null} className={styles.container}>            
            <Logo type='icon'/>
            <div className={styles.menuOutlined}>
                <MenuOutlined style={{ fontSize: '24px' }} className='trigger' onClick={onCollapse}/>
            </div>
            <ListMenu data={dataMenuItems}/>
        </Sider>
        </>
    );
}

export default SideBar;