import React from 'react';
import { connect } from 'react-redux';

const PostShow = ({ post }) =>
  <div className="postCard">
    <h3 className="titleHeader">{post.title}</h3>
    <img className="showImage" src={post.image_url} alt={post.title} />
    <p className="imageContent">{post.content}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  const post = state.posts.find(post => post.id === +ownProps.match.params.postId)

  if (post) {
    return { post }
  } else {
    return { post: {} }
  }
};

export default connect(mapStateToProps)(PostShow);
