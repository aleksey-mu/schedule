import React from 'react';
import Logo from './Logo/Logo';
import dataMenuItems from '../../dataSourсe/data';
import ListMenu from './ListMenu/ListMenu';

import styles from './SideBar.module.scss';

const SideBar = () => {
    return (
        <div className={styles.container}>
            <Logo type='icon'/>
            <ListMenu data={dataMenuItems}/>
        </div>
    );
}

export default SideBar;