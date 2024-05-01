import { settingsType } from "./SettingsTypes";

export const setinitialSettingsScreen = (screenName) => ({
  type: settingsType.SET_INITIAL_SETTINGS_SCREEN,
  screenName,
});
