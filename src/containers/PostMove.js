import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class PostMove extends Component {

  handleNextPost = (id) => {
    this.props.history.push(`/posts/${id}`)
  };


  render() {
    const idx = this.props.sortedPosts.findIndex(sortPost => sortPost.id === this.props.post.id)
    const nextPost = this.props.sortedPosts[idx + 1] || this.props.sortedPosts[0]
    return (
      <button onClick={() => this.handleNextPost(nextPost.id)}>Next</button>
    )
  }
}

const mapStateToProps = (state) => {
  const sortedPosts = state.posts.sort((a, b) => a.likes < b.likes)

  return {
    sortedPosts
  }
}

export default withRouter(connect(mapStateToProps)(PostMove));
