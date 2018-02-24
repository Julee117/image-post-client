import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <div className="commentForm">
        <h4>Write a comment</h4>
        <form>
          <div>
            <input
              type="text"
              name="content"
            />
          </div>
          <button type="submit">Post</button>
      </form>
      </div>
    )
  }
}

export default CommentForm;
