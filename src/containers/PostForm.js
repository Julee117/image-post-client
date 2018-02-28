import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/posts'
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import UploadImage from './UploadImage';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image_url: "",
      content: ""
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleImageUpload = image => {
    this.setState({
      image_url: image.imageUrl
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createPost(this.state);
    this.props.history.push('/')
    this.setState({
      title: "",
      image_url: "",
      content: ""
    })
  }

  render() {
    return (
      <div className="postForm text-center">
        <h1>Create new post</h1>
        <form onSubmit={this.handleOnSubmit}>
          <div className="inputBox">
            <UploadImage image={this.handleImageUpload}/>
          </div>
          <div className="inputBox">
            <label htmlFor="title">Title:</label>
            <input
              className="titleInputBox"
              type="text"
              onChange={this.handleChange}
              name="title"
              value={this.state.title}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="content" className="content">Content:</label>
            <textarea
              className="contentInputBox"
              type="text"
              onChange={this.handleChange}
              name="content"
              value={this.state.content}
            />
          </div>
          <Button bsStyle="info" type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createPost
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostForm);
