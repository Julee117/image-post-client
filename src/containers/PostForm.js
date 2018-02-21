import React, { Component } from 'react';

class PostForm extends Component {
  render() {
    return (
      <div>
        <h1>Create new post</h1>
        <form>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              value={title}
            />
          </div>
          <div>
            <label htmlFor="image_url">Image:</label>
            <input
              type="text"
              name="image_url"
              value={image_url}
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <input
              type="text"
              name="content"
              value={content}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
