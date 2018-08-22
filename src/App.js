import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import PostForm from './containers/PostForm/PostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <PostForm />
      </div>
    );
  }
}

export default App;
