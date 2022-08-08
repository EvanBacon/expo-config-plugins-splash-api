// Dangerous import of unexposed APIs
import { withIosSplashScreenStoryboard } from "@expo/prebuild-config/build/plugins/unversioned/expo-splash-screen/withIosSplashScreenStoryboard";
import { IBSplashScreenDocument } from "@expo/prebuild-config/build/plugins/unversioned/expo-splash-screen/InterfaceBuilder";

import { ConfigPlugin } from "@expo/config-plugins";

export const withSplash: ConfigPlugin = (config) => {
  return withIosSplashScreenStoryboard(config, (config) => {
    config.modResults = modifyDocument(config.modResults);
    return config;
  });
};

// Possibly helpful utils:
// https://github.com/EvanBacon/react-xib/blob/main/demo/InterfaceBuilder.ts
function modifyDocument(document: IBSplashScreenDocument) {
  // Modify xib file as JSON.
  console.log("JSON", document);
  return document;
}
