import { all } from "redux-saga/effects";
import postSga from "./PostsRedux/PostSaga";

function* productSaga() {
  yield all([postSga()]);
}

export default productSaga;
