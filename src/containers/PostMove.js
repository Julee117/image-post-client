import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button } from 'react-bootstrap';

class PostMove extends Component {

  handleNextPost = (id) => {
    this.props.history.push(`/posts/${id}`)
  };


  render() {
    const idx = this.props.sortedPosts.findIndex(sortPost => sortPost.id === this.props.post.id);
    const nextPost = this.props.sortedPosts[idx + 1] || this.props.sortedPosts[0];
    const prevPost = this.props.sortedPosts[idx - 1];
    let button = null;

    if (idx !== 0) {
      button = <Button className="leftArrow" onClick={() => this.handleNextPost(prevPost.id)}><i className="fa fa-chevron-left"></i></Button>
    }
    return (
      <span>
        <Button bsStyle="primary" className= "nextButton" onClick={() => this.handleNextPost(nextPost.id)}>
          Next Post
          <i className="fa fa-chevron-right rightArrow"></i>
        </Button>
        {button}
    </span>
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
