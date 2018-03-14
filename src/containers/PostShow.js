import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import PostLikes from '../components/PostLikes';
import { addLikes, deletePost } from '../actions/posts';
import PostHeader from '../components/PostHeader';
import { Button } from 'react-bootstrap';

class PostShow extends Component {
  handleOnClick = () => {
    this.props.deletePost(this.props.post)
    this.props.history.push('/')
  }
  
  render() {
    const { post, addLikes } = this.props;

    return (
      <div className="postCard col-lg-6">
        <PostHeader post={post}/>
        <img className="showImage" src={post.image_url} alt={post.title} />
        <div className="imageContent">
          <p>{post.content}</p>
          <p className="line"></p>
          <PostLikes post={post} addLikes={addLikes} />
          <Button bsStyle="danger" bsSize="small" className="deleteButton" onClick={this.handleOnClick}>Delete</Button>
        </div>
        <div>
          <CommentForm post={post} />
          <CommentsList post={post} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const post = state.posts.find(post => post.id === +ownProps.match.params.postId)

  if (post) {
    return { post }
  } else {
    return { post: {} }
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addLikes, deletePost
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
