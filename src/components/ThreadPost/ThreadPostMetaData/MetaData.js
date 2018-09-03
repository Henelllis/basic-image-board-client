import React from 'react';

const MetaData = (props) => {
    return (
        <div className='Thread__Post--meta'>
            <p> &nbsp; {props.user} &nbsp; </p>
            <time> &nbsp; {props.timeStamp} &nbsp; </time>
            <p> &nbsp; No.{props.threadPostID} &nbsp;</p>
            <p>&#9658;</p>
        </div>
    );
};

export default MetaData;