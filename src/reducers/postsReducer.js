export default function postsReducer(state = [], action){
  switch(action.type) {
    case 'GET_POSTS':
      return action.posts;
    default:
      return state;
  }
}
