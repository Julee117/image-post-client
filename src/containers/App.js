import React, { Component } from 'react';
import './App.css';
import Posts from './Posts'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Posts</h1>
          <Posts />
        </header>
      </div>
    );
  }
}

export default App;
