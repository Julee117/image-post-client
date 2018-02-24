import React from 'react';
import { connect } from 'react-redux';

const PostShow = ({ post }) =>
  <div className="PostCard">
    <h3>{post.title}</h3>
    <img className="ShowImage" src={post.image_url} alt={post.title} />
    <p>{post.content}</p>
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
