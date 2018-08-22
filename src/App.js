import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
      </div>
    );
  }
}

export default App;
