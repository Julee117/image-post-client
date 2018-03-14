const API_URL = process.env.REACT_APP_API_URL;

const setPosts = posts => {
  return {
    type: 'GET_POSTS',
    posts
  }
}

const addPost = post => {
  return {
    type: 'CREATE_POST',
    post: Object.assign({}, post, {likes: 0})
  }
}

const increaseLikes = data => {
  return {
    type: 'ADD_LIKES',
    data
  }
}

const removePost = post => {
  return {
    type: 'DELETE_POST',
    post
  }
}

export const getPosts = () => {
  return dispatch => {
    return fetch(`${API_URL}/posts`)
      .then(response => response.json())
      .then(posts => dispatch(setPosts(posts)))
      .catch(error => console.log(error));
  }
}

export const createPost = post => {
  return dispatch => {
    return fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({post})
    })
      .then(response => response.json())
      .then(post => dispatch(addPost(post)))
      .catch(error => console.log(error))
  }
}

export const addLikes = post => {
  return dispatch => {
    return fetch(`${API_URL}/posts/${post.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({post})
    })
      .then(response => response.json())
      .then(data => dispatch(increaseLikes(data)))
      .catch(error => console.log(error))
  }
}

export const deletePost = post => {
  return dispatch => {
    return fetch(`${API_URL}/posts/${post.id}`, {
      method: "DELETE",
    })
    .then(response => dispatch(removePost(post)))
    .catch(error => console.log(error))
  }
}
