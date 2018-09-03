import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import PostForm from './containers/PostForm/PostForm';
import PageOfThreads from './containers/PageOfThreads/PageOfThreads';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <PostForm />
        <PageOfThreads/>
      </div>
    );
  }
}

export default App;
