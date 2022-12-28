import { View, Text } from "react-native";
import * as Font from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function cacheFonts(fonts: any[]) {
  return fonts.map((font) => Font.loadAsync(font));
}

const useLoadedAssets = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        //Load fonts
        const fontAssets = cacheFonts([
          Ionicons.font,
          FontAwesome.font,
          FontAwesome5.font,
          MaterialCommunityIcons.font,
        ]);
        await Promise.all([...fontAssets]);
        //Also initial data should be loaded here
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }
    loadResourcesAndDataAsync();
  }, []);
  return isLoadingComplete;
};

export default useLoadedAssets;
