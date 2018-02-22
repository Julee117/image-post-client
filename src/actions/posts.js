const setPosts = posts => {
  return {
    type: 'GET_POSTS',
    posts
  }
}

export const getPosts = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/posts')
      .then(response => response.json())
      .then(posts => dispatch(setPosts(posts)))
      .catch(error => console.log(error));
  }
}
