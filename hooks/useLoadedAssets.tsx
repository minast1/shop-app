import { View, Text, Image } from "react-native";
import * as Font from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { Asset } from "expo-asset";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

function cacheFonts(fonts: any[]) {
  return fonts.map((font) => Font.loadAsync(font));
}

function cacheImages(images: any[]) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
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
          Feather.font,
          FontAwesome.font,
          FontAwesome5.font,
          MaterialCommunityIcons.font,
        ]);

        const imageAssets = cacheImages([
          require("../assets/images/fash1.jpg"),
          require("../assets/images/shoe.jpeg"),
          require("../assets/images/bg.webp"),
          require("../assets/images/bg2.webp"),
          require("../assets/icons/invite.png"),
          require("../assets/icons/noti.png"),
          require("../assets/icons/reg.png"),
          require("../assets/icons/watsie.png"),
        ]);
        await Promise.all([...fontAssets, ...imageAssets]);
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
