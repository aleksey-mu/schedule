import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Logo.module.css';

import logoIcon from '../../../assets/images/logoIcon.svg';
import logo from '../../../assets/images/logo.svg';

const Logo = ({ type }) => {
    const logoUrl = type === 'icon' ? logoIcon : logo;
    return (
        <>
        <div className={clsx(styles.logo, type)}>
            <img src={logoUrl} alt="RSSchool" />
        </div>
        </>
    )
}

Logo.propTypes = {
    type: PropTypes.string,
}

Logo.defaultProps = {
    type: "",
};

export default Logo;