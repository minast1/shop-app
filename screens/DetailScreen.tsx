import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, Icon, IconButton, Text, VStack } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { CategoryStackList } from "../src/types";
import { Feather } from "@expo/vector-icons";
import CartInfo from "../components/CartInfo";

type StackProps = StackScreenProps<CategoryStackList, "ProductDetail">;
type routeParams = StackProps["route"];
type navigationParams = StackProps["navigation"];
const DetailScreen = () => {
  const route = useRoute<routeParams>();
  const navigation = useNavigation<navigationParams>();
  const { id, title, category } = route.params;

  return (
    <>
      <HStack bg="white" alignItems="center" justifyContent="space-between">
        <IconButton
          variant="unstyled"
          _icon={{ color: "black", size: 30 }}
          onPress={() => navigation.navigate("CategoriesTab")}
          icon={<Icon as={Feather} name="chevron-left" />}
        />
        <Text fontSize="lg" textTransform="capitalize">
          {category}
        </Text>
        <CartInfo />
      </HStack>
      <Box flex={1} alignSelf="center" justifyContent="center">
        <Text fontSize="lg">Content Here.. 🛍 </Text>
      </Box>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
