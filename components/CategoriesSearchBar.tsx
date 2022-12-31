import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, Icon, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const CategoriesSearchBar = () => {
  return (
    <HStack
      borderRadius="full"
      alignItems="center"
      backgroundColor="gray.200"
      w="96%"
      mb="3"
    >
      <Icon
        ml="4"
        size="md"
        color="gray.400"
        as={<Ionicons name="ios-search" />}
      />
      <Input
        placeholder="Search..."
        variant="unstyled"
        //isReadOnly={true}
        //onPressIn={() => navigation.navigate("Search")}
        fontSize="lg"
        _input={{ color: "gray.300" }}
        width="63%"
        ml="2"
        px="2"
      />
    </HStack>
  );
};

export default CategoriesSearchBar;

const styles = StyleSheet.create({});
