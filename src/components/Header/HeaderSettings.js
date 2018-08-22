import React from 'react';

const HeaderSettings = () => {
    return (
        <nav className="Header__settings">
        <span>[</span>
        <a className="Header__settings--anchor" href="">Settings</a>
        <span>][</span>
        <a className="Header__settings--anchor" href="">Search</a>
        <span>][</span>
        <a className="Header__settings--anchor" href="">Home</a>
        <span>]</span>   
        </nav>
    );
};

export default HeaderSettings;