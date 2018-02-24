import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }
  }

  handleChange = event => {
    this.setState({
      content: event.target.value
    })
  }

  render() {
    return (
      <div className="commentForm">
        <h4>Write a comment</h4>
        <form>
          <div>
            <textarea
              type="text"
              onChange={this.handleChange}
              name="content"
              value={this.state.content}
            />
          </div>
          <button type="submit">Post</button>
      </form>
      </div>
    )
  }
}

export default CommentForm;
