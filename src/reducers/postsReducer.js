export default (state = [], action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return action.posts;
    case 'CREATE_POST':
      return state.concat(action.post);
    default:
      return state;
  }
}
