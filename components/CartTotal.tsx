import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Badge, Icon, IconButton, VStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { dataProps, getUserCart, userCartProps } from "../src/lib/api";

type Props = {
  total: number;
};
const CartTotal = () => {
  const { isLoading, data } = useQuery<dataProps[] | []>(["cart"], () =>
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
        {data?.length}
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

export default CartTotal;

const styles = StyleSheet.create({});
