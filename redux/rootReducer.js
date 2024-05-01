import { combineReducers } from "redux";
import settingsReducer from "./SettingRedux/SettingsReducer";
import PostReducer from "./PostsRedux/PostReducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
  PostReducer: PostReducer,

  // Add other reducers here
});

export default rootReducer;
