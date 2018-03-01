import React from 'react';
import PostMove from '../containers/PostMove';

const PostHeader = ({post}) =>
  <div className="titleHeader">
    {post.title}
    <PostMove post={post} />
  </div>

export default PostHeader;
