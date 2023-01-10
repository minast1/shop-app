import { View, Text } from "react-native";
import React, { createContext, useState, useEffect } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import { combinedTypes, RootParamList } from "../src/types";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { User } from "firebase/auth";
import { auth } from "../src/lib/firebaseConfig";
import { firebaseUser, userContext } from "../src/lib/context";

const Navigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [listenUser, setListenUser] = useState(false);
  const [user, setUser] = useState<firebaseUser>(null);

  useEffect(() => {
    const authListener = auth.onAuthStateChanged((result) => {
      setUser(result);
      if (initializing && !listenUser) {
        setInitializing(false);
        setListenUser(true);
      }
    });

    return () => {
      if (authListener) {
        authListener();
      }
    };
  }, [initializing, listenUser]);

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };
  return (
    <NavigationContainer theme={navTheme}>
      <userContext.Provider value={user}>
        <RootNavigator />
      </userContext.Provider>
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
