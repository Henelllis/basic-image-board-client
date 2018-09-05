import React, { Component } from 'react';
import Thread from '../Thread/Thread';


class PageOfThreads extends Component {

    state = {
        threads: []    
    }

    componentDidMount() {

        const boardsCollection= this.props.firestore.collection('Boards');
        //{this.props.boardName}
        const boardCollection = boardsCollection.doc('Sigma');
        const threadCollection =  boardCollection.collection('Threads');


        //iQgCllrf0i2oRaMHDUcR
        console.log('[Thread Collection] ' , threadCollection)
        threadCollection.get().then((threads) => {
            threads.docs.forEach((thread) => {
                this.GenerateThread(thread, threadCollection);
            });
            
        })

    }

    GenerateThread = (thread , threadCollection) => {
        let posts = {originalPost:null, childrenPosts:[]};
        const threadDocRef = threadCollection.doc(thread.id);
        const postCollection = threadDocRef.collection('ChildrenThreads');

        const orignalPostData = thread.data();
        const originalPost = {
            threadId : thread.id,
            threadTitle : orignalPostData.threadTitle,
            timeStamp : orignalPostData.timeStamp,
            user: orignalPostData.user,
            numPosts: orignalPostData.numOfPosts,
            message:orignalPostData.threadPostMessage
            //ignore responses get this to look pretty and we can get the gears a rolling
        }
        posts.originalPost = originalPost;

        //ISSUE WITH CHILDREN THREADS (FORSEE NAMING CONVENTIONS)
        postCollection.get().then( (postsSnapshot) => {
            postsSnapshot.docs.forEach( (post) => {
                posts.childrenPosts.push(this.GeneratePost(post));
            })
            const generatedThreads = [...this.state.threads];
            generatedThreads.push(posts);

            this.setState({threads: generatedThreads});
        }) 
    }

    GeneratePost = (post) => {
        const postData = post.data();
        
        let threadPost = { 
            threadId :post.id,
            message: postData.threadPostMessage,
            timeStamp: postData.timeStamp,
            user: postData.user
        }

        return threadPost;
    }

    render() {

        let threadCollection = null;

        if(!this.state.threads){
            threadCollection = <div> LOADING </div>
        }
        else{
            threadCollection = (
                this.state.threads.map(thread => {
                    return (
                        <Thread key={thread.originalPost.threadId} 
                                thread={thread}/>
                    )
                })
            );
        }




        return (
            <div className="Page__Threads--container">
                {threadCollection}
            </div>
            );
    }
}

export default PageOfThreads;