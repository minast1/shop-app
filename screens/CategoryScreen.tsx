import { StyleSheet } from "react-native";
import React from "react";
import { Box, Text, VStack } from "native-base";
import CategoriesSearchBar from "../components/CategoriesSearchBar";

const CategoryScreen = () => {
  return (
    <>
      <VStack flex={1} mt={16} mx="3" space="5" pb="8">
        <CategoriesSearchBar />
      </VStack>

      <Box flex={1} alignSelf="center" justifyContent="center">
        <Text fontSize="lg">Content Here.. 🛍 </Text>
      </Box>
    </>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
