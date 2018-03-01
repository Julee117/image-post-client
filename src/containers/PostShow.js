import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import PostLikes from '../components/PostLikes';
import { addLikes } from '../actions/posts';
import PostHeader from '../components/PostHeader';

const PostShow = ({ post, addLikes }) =>
  <div className="postCard col-lg-6">
    <PostHeader post={post}/>
    <img className="showImage" src={post.image_url} alt={post.title} />
    <div className="imageContent">
      <p>{post.content}</p>
      <p className="line"></p>
      <PostLikes post={post} addLikes={addLikes}/>
    </div>
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
