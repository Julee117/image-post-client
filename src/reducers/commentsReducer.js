export default (state = [], action) => {
  switch(action.type) {
    case 'GET_COMMENTS':
      return action.comments;
    case 'CREATE_COMMENT':
      return state.concat(action.comment);
    default:
      return state;
  }
}
