export default (state = [], action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return action.posts;
    case 'CREATE_POST':
      return state.concat(action.post);
    case 'ADD_LIKES':
      let index = state.findIndex(post => post.id === action.data.id);
      let post = state[index];
      return [
        ...state.slice(0, index),
        Object.assign({}, post, {likes: post.likes += 1}),
        ...state.slice(index+1)
      ];
    default:
      return state;
  }
}
