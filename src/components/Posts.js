import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  const renderPosts = posts.map(post =>
    <Link key={post.id} to={`/posts/${post.id}`}><img className="postImage" src={post.image_url} alt={post.title} /></Link>
  );

  return(
    <div>
      <h3 className="postHeader">Funny viral images</h3>
      <div className="postsContainer">
        {renderPosts}
      </div>
    </div>
  )
}

export default Posts;
