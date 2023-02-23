import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack } from "native-base";
import CategoryShortcut from "./CategoryShortcut";
import {
  CarouselToCatgoriesParamList,
  CategoryStackParams,
  combinedTypes,
  HomeToCategoriesStackList,
  HomeToCategoryTopTab,
} from "../src/types";
import { useNavigation } from "@react-navigation/native";

type navigationParams = CarouselToCatgoriesParamList["navigation"];
const OptionsComponent = () => {
  const navigation = useNavigation<navigationParams>();
  return (
    <HStack
      // justifyContent="space-between"
      py="4"
      bg="#fefce8"
      px="2"
      flexWrap="wrap"
    >
      <CategoryShortcut
        name="Shoes"
        mb="5"
        mr="8"
        uri={require("../assets/images/shoes.png")}
        onPress={() => navigation.navigate("Shoes")}
      />
      <CategoryShortcut
        name="Bags"
        uri={require("../assets/images/bags.png")}
        mb="5"
        mr="8"
        onPress={() => navigation.navigate("Bags")}
      />
      <CategoryShortcut
        name="Clothes"
        uri={require("../assets/images/skit.png")}
        onPress={() => navigation.navigate("Clothes")}
        mb="5"
      />
      <CategoryShortcut
        name="Others"
        uri={require("../assets/images/others.png")}
        mr="8"
        onPress={() => navigation.navigate("Others")}
      />
      <CategoryShortcut
        name="Accessories"
        uri={require("../assets/images/fa2.png")}
        mr="8"
        onPress={() => navigation.navigate("Others")}
      />
      <CategoryShortcut
        name="Fashion"
        uri={require("../assets/images/fashion.png")}
        onPress={() => navigation.navigate("Others")}
      />
    </HStack>
  );
};

export default OptionsComponent;

const styles = StyleSheet.create({});
