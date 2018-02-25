const API_URL = process.env.REACT_APP_API_URL;

const setComments = comments => {
  return {
    type: 'GET_COMMENTS',
    comments
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
