import React, { Component } from 'react';
import './App.css';
import PostsPage from './containers/PostsPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div style={{ paddingBottom: '10px', marginBottom: '12px' }}>
              <Navbar />
            </div>
            <Switch>
              <Route path="/posts" component={PostsPage} />
              <Route path="/" component={PostsPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
