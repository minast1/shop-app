import { extendTheme } from "native-base";

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
    Select: {
      baseStyle: {
        _customDropdownIconProps: {
          color: "#eab308",
          size: "5",
        },
        _focus: {
          borderColor: "#eab308",
        },
      },
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    //initialColorMode: "dark",
  },
});
export default theme;
