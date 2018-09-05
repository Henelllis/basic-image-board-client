import React, { Component } from 'react';
import ThreadPost from '../../components/ThreadPost/ThreadPost';
import OmmittedText from '../../components/ThreadPost/OmmitedText/OmmitedText';

const postThreshold = 5;

class Thread extends Component {

  render() {

    let OmmitedText = null;

    if(this.props.thread.originalPost.numPosts > postThreshold){
      OmmitedText = (<OmmittedText numOfPost={this.props.thread.originalPost.numPosts - postThreshold}/>)
    }

   console.log(this.props.thread.childrenPosts);
   
   let childrenPosts = (this.props.thread.childrenPosts.map(
      post => {
        return <ThreadPost  threadPost={post}/>
      }
    )
  )

    return (
      <div className="Thread--container">
        <ThreadPost originalPost threadPost={this.props.thread.originalPost}/>
        {OmmitedText}
        {childrenPosts}
      </div>
    );
  }
}

export default Thread;
