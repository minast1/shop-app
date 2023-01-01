import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Badge, Icon, IconButton, VStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CartInfo = () => {
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
        0
      </Badge>
      <IconButton
        variant="unstyled"
        _icon={{ color: "black", size: 27 }}
        //onPress={() => navigation.navigate("Home")}
        icon={<Icon as={MaterialCommunityIcons} name="cart-outline" />}
      />
    </VStack>
  );
};

export default CartInfo;

const styles = StyleSheet.create({});
