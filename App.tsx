import "react-native-gesture-handler";

import { NativeBaseProvider } from "native-base";
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
import React from "react";
import { useOnlineManager } from "./hooks/useOnlineManager";
import { useAppState } from "./hooks/useAppState";
import theme from "./src/theme";

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
  useOnlineManager();

  useAppState(onAppStateChange);

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
