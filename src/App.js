import React, { Component } from 'react';
import './App.css';
import Posts from './containers/Posts';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Posts} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
