import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Badge, Icon, IconButton, VStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { getUserCart, userCartProps } from "../src/lib/api";

type Props = {
  total: number;
};
const CartItem = () => {
  const { isLoading, data } = useQuery<userCartProps, Error>(["cart"], () =>
    getUserCart()
  );
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
        {isLoading ? 0 : data?.products.length}
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

export default CartItem;

const styles = StyleSheet.create({});
