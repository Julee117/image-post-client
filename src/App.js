import React, { Component } from 'react';
import './App.css';
import PostsPage from './containers/PostsPage';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div style={{ paddingBottom: '10px', marginBottom: '12px' }}>
              <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
              <NavLink style={{ marginRight: '10px' }} to="/posts/new">New post</NavLink>
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
