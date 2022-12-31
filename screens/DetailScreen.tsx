import { StyleSheet } from "react-native";
import React from "react";
import { Box, Text, VStack } from "native-base";
import { useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { CategoryStackList } from "../src/types";

type StackProps = StackScreenProps<CategoryStackList, "ProductDetail">;
type routeParams = StackProps["route"];
const DetailScreen = () => {
  const route = useRoute<routeParams>();
  const { id, title } = route.params;

  return (
    <>
      <Box flex={1} alignSelf="center" justifyContent="center">
        <Text fontSize="lg">Content Here.. 🛍 </Text>
      </Box>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
