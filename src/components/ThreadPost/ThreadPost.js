import React from 'react';

import MetaData from './ThreadPostMetaData/MetaData';
import Message from './Message/Message';

const ThreadPost = (props) => {
    let threadTitle = null;
    if(props.originalPost) {
        threadTitle = props.threadPost.threadTitle;
    }

    let threadClasses = 'Thread__Post';

    //TODO: ------------------------------------------------------
    let fileInfo = null;
    let fileImage = null;
    if(!props.file){
        console.log('DO WE EVER GET INto NO FILE STYLIN');
        threadClasses = 'Thread__Post Thread__Post--no-file'
        // TODO : GET MORE PENDING FIRESTORE WITH IMAGE STORE AND HOSTING
        fileInfo = props.fileInfo;
        fileImage = props.fileImage;
    }
    //--------------------------------------------------------------

    return (
        <div className={threadClasses}>
            <MetaData 
                      title={threadTitle}
                      user={props.threadPost.user}
                      timeStamp={convertSeconds(props.threadPost.timeStamp.seconds)}
                      threadPostID={props.threadPost.threadId}/>
            {fileInfo}
            {fileImage}
            <Message  message={props.threadPost.message}/>
        </div>
    );
};


const convertSeconds = (timeStampSeconds) => {
    let date = new Date(timeStampSeconds*1000);
    let calendarDate = date.toDateString();
    let time = date.toLocaleTimeString();
    return calendarDate + ' ' + time;
}

export default ThreadPost;