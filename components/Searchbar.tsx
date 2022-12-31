import { StyleSheet } from "react-native";
import React from "react";
import { Box, Button, Icon, Input, HStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { HomeTabStackList } from "../src/types";
import { useNavigation } from "@react-navigation/native";

type HomeScreenNavigationType = HomeTabStackList["navigation"];
const Searchbar = () => {
  const navigation = useNavigation<HomeScreenNavigationType>();
  return (
    <HStack
      borderRadius="full"
      alignItems="center"
      backgroundColor="gray.200"
      w="100%"
    >
      <Icon
        ml="4"
        size="md"
        color="gray.400"
        as={<Ionicons name="ios-search" />}
      />
      <Input
        placeholder="Search"
        variant="unstyled"
        isReadOnly={true}
        onPressIn={() => navigation.navigate("Search")}
        fontSize="lg"
        _input={{ color: "gray.500" }}
        width="63%"
        ml="2"
        px="2"
      />
      <Button
        rounded="full"
        p="3"
        w="26%"
        onPress={() => navigation.navigate("Search")}
      >
        Search
      </Button>
    </HStack>
  );
};

export default Searchbar;

const styles = StyleSheet.create({});
