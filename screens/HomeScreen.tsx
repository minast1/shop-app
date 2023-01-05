import { StyleSheet } from "react-native";
import React from "react";
import { Pressable, View, VStack } from "native-base";
import Searchbar from "../components/Searchbar";
import MainCarousel from "../components/MainCarousel";
import ContactBox from "../components/ContactBox";
import OptionsComponent from "../components/OptionsComponent";
import Notification from "../components/Notification";
import { carouselDataType } from "../src/types";

const HomeScreen = () => {
  const data: carouselDataType[] = [
    { image: { uri: require("../assets/images/fash1.jpg") }, name: "Clothes" },
    { image: { uri: require("../assets/images/bg.webp") }, name: "Bags" },
    { image: { uri: require("../assets/images/bg2.webp") }, name: "Shoes" },
    { image: { uri: require("../assets/images/shoe.jpeg") }, name: "Others" },
  ];

  return (
    <>
      <VStack flex={1} mt={16} mx="3" space="5" pb="8">
        <Searchbar />

        <MainCarousel carouselData={data} />
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
