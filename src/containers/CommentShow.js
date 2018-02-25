import React, { Component } from 'react';

class CommentShow extends Component {

  render() {
    return (
      <div className="comment">
        <p key={this.props.comment.id}>
          {this.props.comment.content}
        </p>
      </div>
    )
  }
}

export default CommentShow;
