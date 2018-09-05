import React, { Component } from 'react';
import ThreadPost from '../../components/ThreadPost/ThreadPost';

class Thread extends Component {
  render() {
    console.log('[DA PROPS]', this.props.thread.originalPost);
    return (
      <div className="Thread--container">
        <ThreadPost originalPost threadPostId={this.props.thread.originalPost.threadId}/>
        <ThreadPost threadPostId={this.props.thread.originalPost.threadId}/>
      </div>
    );
  }
}

export default Thread;
