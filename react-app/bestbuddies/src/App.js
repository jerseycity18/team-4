import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BuddyProfile from './BuddyProfile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to BestBuddies</h1>
        </header>
        <BuddyProfile />
      </div>
    );
  }
}

export default App;
