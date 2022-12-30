import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import CategoryScreen from "../screens/CategoryScreen";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      //screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
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

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: any) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneNavigator}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}

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
