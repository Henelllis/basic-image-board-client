import React from 'react';


const OmmitedText = (props) => {
    return (
        <div className="Thread__Post--Ommited">
        <button className='Thread__Post--Ommited--button'>+</button>
        <p className="Thread__Post--Ommited--text">{props.numOfPost} replies and 12 images ommited   
            <a className='Thread__Post--Ommited--click' href='/'> Click here </a> 
            to review 
        </p>
      </div>
    );
};

export default OmmitedText;