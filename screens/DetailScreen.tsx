import { StyleSheet } from "react-native";
import React, { useContext } from "react";
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
import {
  carouselDataType,
  CategoryStackList,
  ProductDetailToAuthStackList,
} from "../src/types";
import { Feather } from "@expo/vector-icons";
import Likes from "../components/Likes";
import { FontAwesome } from "@expo/vector-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { dataProps, getUserCart } from "../src/lib/api";
import CartTotal from "../components/CartTotal";
import MainCarousel from "../components/MainCarousel";
import { userContext } from "../src/lib/context";

type StackProps = StackScreenProps<CategoryStackList, "ProductDetail">;
type routeParams = StackProps["route"];
type navigationParams = ProductDetailToAuthStackList["navigation"];

const DetailScreen = () => {
  const route = useRoute<routeParams>();
  const navigation = useNavigation<navigationParams>();
  const authUser = useContext(userContext);
  const [selectedSize, setSize] = React.useState<string | null>();
  const { id, title, category, image, description, price } = route.params;
  const data: carouselDataType[] = Array.from({ length: 4 }, (item, index) => {
    return { image: { uri: image } };
  });
  const sizes = ["SM", "MD", "LG"];
  const [quantity, setQuantity] = React.useState(1);
  const increaseQuantity = React.useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const decreaseQuantity = React.useCallback(() => {
    if (quantity == 0) {
      return;
    } else setQuantity(quantity - 1);
  }, [quantity]);

  const changeSelectedSizeButton = React.useCallback((item: string) => {
    setSize(item);
  }, []);

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
          <HStack>
            <Likes />
          </HStack>
        </Box>
        <VStack mt="1" mb="3" mx="2" flex={1} space="2">
          <Text fontSize="lg" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="#eab308">
            GH₵ {price}
          </Text>
          <Text>{description}</Text>
          <VStack mt="3" space="3">
            <Text fontWeight="bold">Available Sizes</Text>
            <HStack space="2">
              {sizes.map((item, index) => (
                <Button
                  variant="outline"
                  onPress={() => changeSelectedSizeButton(item)}
                  size="xs"
                  key={index}
                  _text={{ color: "black" }}
                  w="15%"
                  bg={item === selectedSize ? "#eab308" : "transparent"}
                  borderRadius="xs"
                >
                  {item}
                </Button>
              ))}
            </HStack>
            <Text fontWeight="bold">Order Quantity</Text>
            <HStack justifyContent="space-between" w="30%" alignItems="center">
              <IconButton
                variant="solid"
                bg="#eab308"
                onPress={decreaseQuantity}
                _pressed={{ backgroundColor: "#ca8a04" }}
                size="md"
                _icon={{
                  as: Feather,
                  name: "minus",
                }}
              />
              <Text fontSize="md">{quantity}</Text>
              <IconButton
                variant="solid"
                bg="#eab308"
                onPress={increaseQuantity}
                _pressed={{ backgroundColor: "#ca8a04" }}
                size="md"
                _icon={{
                  as: Feather,
                  name: "plus",
                }}
              />
            </HStack>
          </VStack>

          <HStack space="3" mt="8" justifyContent="flex-end">
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
                authUser
                  ? updateCart.mutate({
                      id,
                      title,
                      category,
                      image,
                      description,
                      price,
                    })
                  : navigation.navigate("Login");
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
