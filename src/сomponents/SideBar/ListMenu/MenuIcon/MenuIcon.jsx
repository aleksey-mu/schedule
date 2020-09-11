import React from 'react';
import PropTypes from 'prop-types';

import './MenuIcon.scss';

const MenuIcon = ({ icon }) => {
    return <span className={`anticon icon-${icon}`}/>;
}

MenuIcon.propTypes = {
    icon: PropTypes.string,
}

MenuIcon.defaultProps = {
    icon: '',
};

export default MenuIcon;