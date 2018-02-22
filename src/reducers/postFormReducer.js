const initialState = {
  title: "",
  image_url: "",
  content: ""
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.postFormData;
    default:
      return state;
  }
}
