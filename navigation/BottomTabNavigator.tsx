import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import CategoryScreen from "../screens/CategoryScreen";
import SearchResultsScreen from "../screens/SearchResultsScreen";
import {
  combinedTypes,
  HomeStackParamList,
  HomeTabStackList,
  TabParamList,
} from "../src/types";

const BottomTab = createBottomTabNavigator<TabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      //screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarLabelStyle: {
            fontSize: 11,
          },
          tabBarActiveTintColor: "#eab308",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={25} color="#eab308" />
            ) : (
              <Ionicons name="home-outline" size={25} color="black" />
            ),
        }}
      />
      <BottomTab.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 11,
          },
          tabBarActiveTintColor: "#eab308",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="grid" size={25} color="#eab308" />
            ) : (
              <Ionicons name="grid-outline" size={25} color="black" />
            ),
        }}
      />
      <BottomTab.Screen
        name="Me"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: "#eab308",
          tabBarLabelStyle: {
            fontSize: 11,
          },
          headerShown: false,

          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="user-alt" size={24} color="#eab308" />
            ) : (
              <FontAwesome5 name="user" size={24} color="black" />
            ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarActiveTintColor: "#eab308",
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 11,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="cart" size={25} color="#eab308" />
            ) : (
              <MaterialCommunityIcons
                name="cart-outline"
                size={25}
                color="black"
              />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
};

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<{
  Home: undefined;
  Search: undefined;
}>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Search"
        component={SearchResultsScreen}
        options={{ headerTitle: "Search results here" }}
      />
    </HomeStack.Navigator>
  );
};

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoNavigator}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
export default BottomTabNavigator;
