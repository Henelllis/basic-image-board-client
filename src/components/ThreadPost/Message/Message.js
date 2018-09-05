import React from 'react';

const Message = (props) => {
    return (
        <p className='Thread__Post--message'>
            {props.message}
        </p>
    );
};

export default Message;