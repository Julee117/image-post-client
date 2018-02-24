import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePostFormData } from '../actions/postForm';
import { createPost } from '../actions/posts'
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';

class PostForm extends Component {

  handleChange = event => {
    const {name, value} = event.target
    const currentPostFormData = Object.assign({}, this.props.postFormData, {[name]: value})
    this.props.updatePostFormData(currentPostFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createPost(this.props.postFormData)
  }

  render() {
    const {title, image_url, content} = this.props.postFormData;
    return (
      <div className="postForm text-center">
        <h1>Create new post</h1>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="title"
              value={title}
            />
          </div>
          <div>
            <label htmlFor="image_url">Image:</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="image_url"
              value={image_url}
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <input
              type="text"
              onChange={this.handleChange}
              name="content"
              value={content}
            />
          </div>
          <Button bsStyle="info" type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    postFormData: state.postFormData
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updatePostFormData,
    createPost
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
