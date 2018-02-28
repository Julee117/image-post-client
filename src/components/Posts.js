import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  const sortedPosts = posts.sort((a, b) => a.likes < b.likes)
  const renderPosts = sortedPosts.map(post =>
    <Link key={post.id} to={`/posts/${post.id}`}>
      <img className="postImage img-responsive" src={post.image_url} alt={post.title} />
    </Link>
  );

  return(
    <div>
      <h3 className="postHeader">Funny viral images</h3>
      <div className="postsContainer container">
        <div className="row">
          <div className="col-lg-12 col-md-4 col-sm-6">
            {renderPosts}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts;
