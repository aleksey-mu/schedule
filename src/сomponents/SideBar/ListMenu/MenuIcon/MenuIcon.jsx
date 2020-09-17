import React from 'react';
import { string } from 'prop-types';
import clsx from 'clsx';

import './MenuIcon.scss';
import styles from './MenuIcon.module.scss'


const MenuIcon = ({ icon }) => {
    return <span className={clsx(styles.menuicon, `anticon icon-${icon}`)}/>;
}

MenuIcon.propTypes = {
    icon: string,
}

MenuIcon.defaultProps = {
    icon: '',
};

export default MenuIcon;