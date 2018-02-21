import React from 'react';
import PostCard from '../components/PostCard';
import PostForm from './PostForm';

const Posts = (props) => (
  <div className="PostsContainer">
    <h1>Posts</h1>
    {props.posts.map(post => <PostCard key={post.id} post={post} />)}
  </div>
)

export default Posts;
