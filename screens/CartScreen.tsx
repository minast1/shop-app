import { StyleSheet } from "react-native";
import React from "react";
import { Box, Text, View, FlatList } from "native-base";
import { useQuery } from "@tanstack/react-query";
import { dataProps, getUserCart } from "../src/lib/api";
import CartItem from "../components/CartItem";

const CartScreen = () => {
  const { isLoading, data } = useQuery<dataProps[] | []>(["cart"], () =>
    getUserCart()
  );
  //console.log(data);
  return (
    <View pt="3" flex={1} bg="white" alignItems="center">
      <Box>
        <FlatList
          data={data}
          renderItem={({ item }) => <CartItem {...item} />}
          keyExtractor={(item, index) => item.id.toString() + index}
        />
      </Box>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
