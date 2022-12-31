import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Input,
  Text,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HomeTabStackList } from "../src/types";
import { FontAwesome } from "@expo/vector-icons";

type HomeScreenNavigationType = HomeTabStackList["navigation"];
const SearchResultsScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationType>();
  return (
    <>
      <HStack
        mt="12"
        space="4"
        pb="3"
        borderBottomColor="gray.400"
        borderBottomWidth={1}
        alignItems="center"
      >
        <IconButton
          ml="1"
          variant="unstyled"
          _icon={{ color: "black", size: "lg" }}
          onPress={() => navigation.navigate("Home")}
          icon={<Icon as={Feather} name="chevron-left" />}
        />
        <Input
          placeholder="Search or find product.."
          variant="unstyled"
          // onPressIn={() => navigation.navigate("Search")}
          fontSize="lg"
          //_input={{ color: "gray.500" }}
          width="63%"
          px="1"
        />
        <FontAwesome name="microphone" size={24} color="black" />
        <FontAwesome name="camera" size={24} color="black" />
      </HStack>
      <Box flex={1} alignSelf="center" justifyContent="center">
        <Text fontSize="lg">User Search results are filtered here</Text>
      </Box>
    </>
  );
};

export default SearchResultsScreen;

const styles = StyleSheet.create({});
