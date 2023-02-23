import { StyleSheet } from "react-native";
import React from "react";
import { Box, Text, View, FlatList, VStack, HStack, Button } from "native-base";
import { useQuery } from "@tanstack/react-query";
import { dataProps, getUserCart } from "../src/lib/api";
import CartItem from "../components/CartItem";
import { FontAwesome } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

const CartScreen = () => {
  const { isLoading, data } = useQuery<dataProps[] | []>(["cart"], () =>
    getUserCart()
  );
  if (data?.length == 0)
    return (
      <View flex={1} bg="white">
        <VStack w="100%">
          <Box bg="gray.200" py="4" justifyContent="center" px="2">
            <Text color="gray.500" fontSize="md">
              Cart Summary
            </Text>
          </Box>
          <HStack
            bg="gray.100"
            py="4"
            justifyContent="space-between"
            alignItems="center"
            px="2"
          >
            <Text fontSize="lg">Subtotal</Text>
            <Text fontSize="lg" fontWeight="bold">
              {" "}
              GH₵ 0.00
            </Text>
          </HStack>
        </VStack>
        <View flex={1} bg="white" alignItems="center" justifyContent="center">
          <LottieView
            autoPlay
            style={{ width: 250, height: 250 }}
            source={require("../assets/icons/emptyCart.json")}
          />
        </View>
      </View>
    );
  return (
    <View flex={1} bg="white">
      <VStack w="100%">
        <Box bg="gray.200" py="4" justifyContent="center" px="2">
          <Text color="gray.500" fontSize="md">
            Cart Summary
          </Text>
        </Box>
        <HStack
          bg="gray.100"
          py="4"
          justifyContent="space-between"
          alignItems="center"
          px="2"
        >
          <Text fontSize="lg">Subtotal</Text>
          <Text fontSize="lg" fontWeight="bold">
            {" "}
            GH₵ 1000
          </Text>
        </HStack>
      </VStack>

      <Box flex={1}>
        <FlatList
          data={data}
          renderItem={({ item }) => <CartItem {...item} />}
          keyExtractor={(item, index) => item.id.toString() + index}
        />
      </Box>
      <HStack space="3" my="3" px="2">
        <Button
          w="20%"
          variant="outline"
          bg="transparent"
          borderColor="#eab308"
          leftIcon={<FontAwesome name="phone" size={24} color="#eab308" />}
        />

        <Button w="75%" _text={{ fontSize: "md" }}>
          Proceed To Checkout
        </Button>
      </HStack>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
