import React from 'react';

const Banner = () => {
    return (
        <div className="Banner_container">
            <span>
                <img className ="Banner_container--image" src={require("./Cat-Banner-medium23.jpg")} alt="Cat banners"/>
            </span>
            <h1 className="Banner_container--header">/&sigma;/ - Sigma Board</h1>
        </div>
    );
};

export default Banner;

