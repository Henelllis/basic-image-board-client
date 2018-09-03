import React from 'react';
import MetaData from './ThreadPostMetaData/MetaData';

const ThreadPost = (props) => {
    return (
        <div className="Thread__Post">
            <MetaData user={'Anonymous'}
                      timeStamp={(new Date(2018,9,2,13,34,23,16)).toLocaleTimeString('en-US')}
                      threadPostID={props.threadPostId}/>
            PLEASE DONT DO THIS TO ME
        </div>
    );
};

export default ThreadPost;