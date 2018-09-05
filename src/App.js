import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import PostForm from './containers/PostForm/PostForm';
import PageOfThreads from './containers/PageOfThreads/PageOfThreads';

class App extends Component {
  render() {
    console.log('IN THE PROPS : ', this.props.firestore);
    return (
      <div className="App">
        <Header />
        <Banner />
        <PostForm />
        <PageOfThreads firestore={this.props.firestore}/>
      </div>
    );
  }
}

export default App;
