import { StyleSheet } from "react-native";
import React from "react";
import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { carouselDataType, CategoryStackList } from "../src/types";
import { Feather } from "@expo/vector-icons";
import Likes from "../components/Likes";
import { FontAwesome } from "@expo/vector-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { dataProps, getUserCart } from "../src/lib/api";
import CartTotal from "../components/CartTotal";
import MainCarousel from "../components/MainCarousel";

type StackProps = StackScreenProps<CategoryStackList, "ProductDetail">;
type routeParams = StackProps["route"];
type navigationParams = StackProps["navigation"];
const DetailScreen = () => {
  const route = useRoute<routeParams>();
  const navigation = useNavigation<navigationParams>();
  const { id, title, category, image, description, price } = route.params;
  const data: carouselDataType[] = Array.from({ length: 4 }, (item, index) => {
    return { image: { uri: image } };
  });
  //console.log(data);
  const queryClient = useQueryClient();
  const updateCart = useMutation({
    mutationFn: getUserCart,
    onMutate: async (product: dataProps) => {
      // await queryClient.cancelQueries({ queryKey: ["cart"] });
      const previousCartItems = queryClient.getQueryData<dataProps[]>(["cart"]);
      if (previousCartItems) {
        queryClient.setQueryData<dataProps[]>(
          ["cart"],
          [...previousCartItems, product]
        );
      }
      return { previousCartItems };
    },
  });
  return (
    <>
      <HStack
        bg="white"
        alignItems="center"
        justifyContent="space-between"
        borderBottomWidth={1}
        borderBottomColor="gray.200"
      >
        <IconButton
          variant="unstyled"
          _icon={{ color: "black", size: 30 }}
          onPress={() => navigation.navigate("CategoriesTab")}
          icon={<Icon as={Feather} name="chevron-left" />}
        />
        <Text fontSize="lg" textTransform="capitalize">
          {category}
        </Text>
        <CartTotal />
      </HStack>
      <ScrollView>
        <Box my="2" width="100%">
          <MainCarousel carouselData={data} />
        </Box>
        <VStack my="1" mx="2" flex={1} space="2">
          <Text fontSize="lg" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="#eab308">
            ₵ {price}.00
          </Text>
          <Text>{description}</Text>
          <HStack space="3">
            <Likes />

            <Button
              w="20%"
              ml="20"
              leftIcon={<FontAwesome name="phone" size={24} color="white" />}
            />

            <Button
              w="35%"
              _text={{ fontSize: "md" }}
              onPress={() => {
                //if user is logged in
                updateCart.mutate({
                  id,
                  title,
                  category,
                  image,
                  description,
                  price,
                });
                //else
                //navigation.navigate()
              }}
            >
              Add To Cart
            </Button>
          </HStack>
        </VStack>
      </ScrollView>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    height: 450,
    width: 370,
    //borderWidth: 1,
    borderRadius: 5,
  },
});
