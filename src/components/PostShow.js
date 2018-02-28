import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentForm from '../containers/CommentForm';
import CommentsList from '../containers/CommentsList';
import PostLikes from './PostLikes';
import { addLikes } from '../actions/posts';

const PostShow = ({ post, addLikes }) =>
  <div className="postCard">
    <h3 className="titleHeader">{post.title}</h3>
    <img className="showImage" src={post.image_url} alt={post.title} />
    <p className="imageContent">{post.content}</p>
    <PostLikes post={post} addLikes={addLikes}/>
    <div>
      <CommentForm post={post}/>
      <CommentsList post={post}/>
    </div>
  </div>;

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
    addLikes
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
