import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Badge, Icon, IconButton, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

//<FontAwesome name="heart" size={24} color="black" /> Use this when the product is liked
const Likes = () => {
  return (
    <VStack mr="4">
      <Badge // bg="red.400"
        colorScheme="custom"
        rounded="full"
        mb={-6}
        mr={-2}
        zIndex={1}
        variant="solid"
        alignSelf="flex-end"
        _text={{
          fontSize: 10,
        }}
      >
        5
      </Badge>
      <IconButton
        variant="unstyled"
        _icon={{ color: "black", size: 27 }}
        //onPress={() => navigation.navigate("Home")}
        icon={<Icon as={FontAwesome} name="heart-o" />}
      />
    </VStack>
  );
};

export default Likes;

const styles = StyleSheet.create({});
