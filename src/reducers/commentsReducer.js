export default (state = [], action) => {
  switch(action.type) {
    case 'GET_COMMENTS':
      return action.comments;
    case 'CREATE_COMMENT':
      return state.concat(action.comment);
    case 'DELETE_COMMENT':
      const comments = state.filter(comment => comment.id !== action.comment.id);
      return comments;
    default:
      return state;
  }
}
