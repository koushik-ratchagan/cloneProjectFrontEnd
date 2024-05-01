import axios from "axios";

export const PostNetwork = {
  getPost: () => {
    return axios.get("https://projectbackend-1-zfen.onrender.com/api/posts");
  },
};
