import { View, Text } from "react-native";
import * as Font from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as SplashScreen from "expo-splash-screen";
import React from "react";

const useLoadedAssets = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        //Load fonts
        await Font.loadAsync(Ionicons.font);
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
