import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import SearchResultsScreen from "../screens/SearchResultsScreen";
import { TabParamList } from "../src/types";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ClothScreen from "../screens/ClothScreen";
import BagsScreen from "../screens/BagsScreen";
import OthersScreen from "../screens/OthersScreen";
import DetailScreen from "../screens/DetailScreen";
import AccessoriesScreen from "../screens/AccessoriesScreen";

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
        component={CategoryNavigator}
        options={{
          tabBarLabelStyle: {
            fontSize: 11,
          },

          tabBarActiveTintColor: "#eab308",
          headerStyle: {
            borderWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            height: 60,
          },
          headerTitleStyle: { display: "none" },
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
          headerShown: true,
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
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

const CategoriesStack = createStackNavigator();
const CategoriesTabs = createMaterialTopTabNavigator();

function CategoriesTabsNavigator() {
  return (
    <CategoriesTabs.Navigator
      initialRouteName="Clothes"
      screenOptions={{
        swipeEnabled: false,
        tabBarActiveTintColor: "#eab308",

        tabBarInactiveTintColor: "black",
        tabBarIndicatorStyle: {
          backgroundColor: "#eab308",
        },
      }}
    >
      <CategoriesTabs.Screen name="Clothes" component={ClothScreen} />
      <CategoriesTabs.Screen
        name="Bags"
        component={BagsScreen}
        //  options={{ animationEnabled: false }}
      />
      <CategoriesTabs.Screen
        name="Shoes"
        component={OthersScreen}
        // options={{ animationEnabled: false }}
      />
      <CategoriesTabs.Screen
        name="Others"
        component={AccessoriesScreen}
        // options={{ animationEnabled: false }}
      />
    </CategoriesTabs.Navigator>
  );
}

function CategoryNavigator() {
  return (
    <CategoriesStack.Navigator initialRouteName="CategoriesTab">
      <CategoriesStack.Screen
        name="CategoriesTab"
        component={CategoriesTabsNavigator}
        options={{ headerShown: false }}
      />
      <CategoriesStack.Screen
        name="ProductDetail"
        component={DetailScreen}
        options={{
          headerShown: false,
          // headerTitleStyle: { display: "none" },
          // headerLeftLabelVisible: false,
          // headerL
        }}
      />
    </CategoriesStack.Navigator>
  );
}
export default BottomTabNavigator;
