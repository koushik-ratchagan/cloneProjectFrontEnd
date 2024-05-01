import { POST_TYPES } from "./PostType";

const initialState = {
  allPosts: [],
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_TYPES.GET_POST_API_CALL_SUCCESS:
      return { ...state, allPosts: action?.payload };

    default:
      return state;
  }
};

export default PostReducer;
