import React from 'react';

const PostLikes = ({post, addLikes}) =>
  <div>
    <p className="icons">
      <i onClick={() => addLikes(post)} className="fa fa-thumbs-o-up fa-2x thumbs" aria-hidden="true"></i>
      <span> Like</span>
      <span className="likes">{post.likes === null || post.likes === 0 ? "" : <i className="fa fa-smile-o smile" aria-hidden="true"> {post.likes} likes</i>}</span>
    </p>
  </div>

export default PostLikes;
