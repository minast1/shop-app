import { StyleSheet } from "react-native";
import React from "react";
import { View, VStack } from "native-base";
import Searchbar from "../components/Searchbar";
import MainCarousel from "../components/MainCarousel";
import ContactBox from "../components/ContactBox";
import OptionsComponent from "../components/OptionsComponent";
import Notification from "../components/Notification";

const HomeScreen = () => {
  return (
    <>
      <VStack flex={1} mt={16} mx="3" space="5" pb="8">
        <Searchbar />
        <MainCarousel />
        <ContactBox />
      </VStack>
      <View bg="gray.200" flex={1}>
        <OptionsComponent />
        <Notification />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
