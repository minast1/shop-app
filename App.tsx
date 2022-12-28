import { NativeBaseProvider } from "native-base";
import Navigation from "./navigation";
import { StatusBar } from "expo-status-bar";
import useLoadedAssets from "./hooks/useLoadedAssets";

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider>
        <Navigation />
        <StatusBar />
      </NativeBaseProvider>
    );
  }
}
