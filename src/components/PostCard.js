import React from 'react';

const PostCard = ({post}) => (
  <div key={post.id} className="PostCard">
    <h3>{post.title}</h3>
    <img className="PostImage" src={post.image_url} alt={post.title} />
    <p>{post.content}</p>
  </div>
)

export default PostCard;
