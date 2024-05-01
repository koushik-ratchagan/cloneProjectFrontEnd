import { POST_TYPES } from "./PostType";

export const getPost = () => {
  return {
    type: POST_TYPES.GET_POST_API_CALL,
  };
};
