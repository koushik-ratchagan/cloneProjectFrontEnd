import { settingsType } from "./SettingsTypes";

const initialState = {
  settingsInitialScreen: "",
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case settingsType.SET_INITIAL_SETTINGS_SCREEN:
      return { ...state, settingsInitialScreen: action.screenName };

    default:
      return state;
  }
};

export default settingsReducer;
