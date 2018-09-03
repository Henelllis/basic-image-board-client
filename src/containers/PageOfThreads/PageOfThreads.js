import React, { Component } from 'react';
import Thread from '../Thread/Thread';
import firebase from 'firebase-app';

const threads = [
    {threadId:1234566},
    {threadId:1234589},
    {threadId:1234499}
]




class PageOfThreads extends Component {

    componentDidMount() {
        axios.get('https://');
    }


    render() {

        let threadCollection = (
            threads.map(thread => {
                return (
                    <Thread threadId={thread.threadId}/>
                )
            })
        );


        return (
            <div className="Page__Threads--container">
                {threadCollection}
            </div>
            );
    }
}

export default PageOfThreads;