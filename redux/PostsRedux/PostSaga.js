import { call, put, takeEvery } from "redux-saga/effects";
import { POST_TYPES } from "./PostType";
import { PostNetwork } from "./PostNetwork";
import { isArrayNonEmpty } from "../../helpers/ProjectHelpers";

function* registerUser() {
  try {
    const response = yield call(PostNetwork.getPost);

    if (
      (response.data.status =
        "success" && isArrayNonEmpty(response?.data?.message))
    ) {
      yield put({
        type: POST_TYPES.GET_POST_API_CALL_SUCCESS,
        payload: response?.data?.message,
      });
    }
  } catch (e) {
    console.log(e);
  }
}

function* postSga() {
  yield takeEvery(POST_TYPES.GET_POST_API_CALL, registerUser);
}

export default postSga;
