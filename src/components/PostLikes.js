import React from 'react';

const PostLikes = ({post, addLikes}) =>
  <div>
    <p>
      <i onClick={() => addLikes(post)} className="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
      <span> Like</span>
    </p>
    <p>{post.likes === null ? "" : <i className="fa fa-smile-o" aria-hidden="true"> {post.likes}</i>}</p>
  </div>

export default PostLikes;
