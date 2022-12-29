import { StyleSheet } from "react-native";
import React from "react";
import { View } from "native-base";
import Searchbar from "../components/Searchbar";

const HomeScreen = () => {
  return (
    <View flex={1} mt={16} mx="3">
      <Searchbar />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
