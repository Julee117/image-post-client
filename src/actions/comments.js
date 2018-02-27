const API_URL = process.env.REACT_APP_API_URL;

const setComments = comments => {
  return {
    type: 'GET_COMMENTS',
    comments
  }
}

const addComment = comment => {
  return {
    type: 'CREATE_COMMENT',
    comment
  }
}

const removeComment = comment => {
  return {
    type: 'DELETE_COMMENT',
    comment
  }
}

export const getComments = () => {
  return dispatch => {
    return fetch(`${API_URL}/comments`)
      .then(response => response.json())
      .then(comments => dispatch(setComments(comments)))
      .catch(error => console.log(error));
  }
}

export const createComment = comment => {
  return dispatch => {
    return fetch(`${API_URL}/comments`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({comment})
    })
      .then(response => response.json())
      .then(comment => dispatch(addComment(comment)))
      .catch(error => console.log(error))
  }
}

export const deleteComment = comment => {
  return dispatch => {
    return fetch(`${API_URL}/comments/${comment.id}`, {
      method: "DELETE",
    })
      .then(response => dispatch(removeComment(comment)))
      .catch(error => console.log(error))
  }
}
