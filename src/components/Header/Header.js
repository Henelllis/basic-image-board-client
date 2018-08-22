import React from 'react';

import HeaderLinks from './HeaderLinks';
import HeadingSettings from './HeaderSettings';

import '../../App.css';

const Header = () => {
    return (
        <div className="Header__container">
            <HeaderLinks />
            <HeadingSettings />
        </div>
    );
};

export default Header;