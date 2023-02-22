import { StyleSheet } from "react-native";
import React from "react";
import { Pressable, ScrollView, Text, View, VStack } from "native-base";
import Searchbar from "../components/Searchbar";
import MainCarousel from "../components/MainCarousel";
import ContactBox from "../components/ContactBox";
import OptionsComponent from "../components/OptionsComponent";
import Notification from "../components/Notification";
import { carouselDataType } from "../src/types";
import Constants from "expo-constants";

const HomeScreen = () => {
  const data: carouselDataType[] = [
    { image: { uri: require("../assets/images/fash1.jpg") }, name: "Clothes" },
    { image: { uri: require("../assets/images/bg.webp") }, name: "Bags" },
    { image: { uri: require("../assets/images/bg2.webp") }, name: "Shoes" },
    { image: { uri: require("../assets/images/shoe.jpeg") }, name: "Others" },
  ];
  //console.log(Constants.expoConfig?.extra?.firebaseApiKey);
  return (
    <ScrollView flex={1}>
      <VStack mt={16} mx="3" space="2" pb="5">
        <Searchbar />

        <MainCarousel carouselData={data} />
        <ContactBox />
      </VStack>
      <OptionsComponent />
      <View bg="gray.200" flex={1}>
        <Notification />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
