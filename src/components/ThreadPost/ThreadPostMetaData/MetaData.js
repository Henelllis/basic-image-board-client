import React from 'react';

const MetaData = (props) => {

    let title = null;

    if(props.title){
        title = (<p> &nbsp; {props.title} &nbsp;</p>);
    }

    return (
        <div className='Thread__Post--meta'>
            {title}
            <p> &nbsp; {props.user} &nbsp; </p>
            <time> &nbsp; {props.timeStamp} &nbsp; </time>
            <p> &nbsp; No.{props.threadPostID} &nbsp;</p>
            <p>&#9658;</p>
        </div>
    );
};

export default MetaData;