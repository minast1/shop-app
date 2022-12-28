import { NativeBaseProvider, extendTheme } from "native-base";
import Navigation from "./navigation";
import { StatusBar } from "expo-status-bar";
import useLoadedAssets from "./hooks/useLoadedAssets";

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#FEFCE8",
        100: "#FEF9C3",
        200: "#FEF08A",
        300: "#FDE047",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#007AB8",
        700: "#006BA1",
        800: "#005885",
        900: "#003F5E",
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: "#d97706",
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
      <NativeBaseProvider>
        <Navigation />
        <StatusBar />
      </NativeBaseProvider>
    );
  }
}
