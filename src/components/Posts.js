import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  const renderPosts = posts.map(post =>
    <Link key={post.id} to={`/posts/${post.id}`}><img className="PostImage" src={post.image_url} alt={post.title} /></Link>
  );

  return(
    <div className="postsContainer">
      {renderPosts}
    </div>
  )
}

export default Posts;
