import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Logo.module.scss';

import logoIcon from '../../../assets/images/logoIcon.svg';
import logo from '../../../assets/images/logo.png';

const Logo = ({ type }) => {
    const isIcon = type === 'icon';
    const logoUrl = isIcon ? logoIcon : logo;
    return (
        <>
        <div className={clsx(styles.logo, type, 'logo')}>
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