import { View, Text } from "react-native";
import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import { combinedTypes, RootParamList } from "../src/types";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Navigation = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };
  return (
    <NavigationContainer theme={navTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<{
  Root: undefined;
  Login: undefined;
  Register: undefined;
}>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerLeftLabelVisible: false,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: true,
          headerLeftLabelVisible: false,
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
}
export default Navigation;
