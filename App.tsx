import "react-native-gesture-handler";

import { NativeBaseProvider, extendTheme } from "native-base";
import Navigation from "./navigation";
import { StatusBar } from "expo-status-bar";
import useLoadedAssets from "./hooks/useLoadedAssets";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  focusManager,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AppStateStatus, Platform } from "react-native";

const client = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const theme = extendTheme({
    colors: {
      custom: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#005885",
        900: "#003F5E",
      },
    },
    components: {
      Button: {
        defaultProps: {
          colorScheme: "custom",
        },
        baseStyle: {
          bg: "#eab308",
          rounded: "lg",
          bgColor: "#eab308",
          _pressed: {
            bg: "custom.600",
            bgColor: "custom.600",
          },
          _text: {},
        },
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      //initialColorMode: "dark",
    },
  });
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={client}>
        <NativeBaseProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar style="dark" />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </QueryClientProvider>
    );
  }
}
