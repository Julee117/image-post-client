import React, { Component } from 'react';
import './App.css';
import Posts from './Posts'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/posts')
      .then(response => response.json())
      .then(posts => this.setState({posts}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Posts</h1>
          <Posts posts={this.state.posts} />
        </header>
      </div>
    );
  }
}

export default App;
