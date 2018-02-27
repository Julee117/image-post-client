import React, { Component } from 'react';

class PostLikes extends Component {
  updateLike = () => {
    const likesData = {
      likes: this.props.post.likes += 1,
      id: this.props.post.id
    }
    this.props.addLikes(likesData);
  }

  render() {
    return (
      <div>
        <p>
          <i onClick={this.updateLike} className="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
          <span> Like</span>
        </p>
        <p>{this.props.post.likes === null ? "" : <i className="fa fa-smile-o" aria-hidden="true">{this.props.post.likes}</i>}</p>
    </div>
    )
  }
}

export default PostLikes
