import { StyleSheet } from "react-native";
import React from "react";
import {
  Button,
  HStack,
  Image,
  Text,
  VStack,
  IconButton,
  Box,
} from "native-base";
import { dataProps } from "../src/lib/api";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const CartItem = ({ ...props }: dataProps) => {
  const [quantity, setQuantity] = React.useState(1);
  const increaseQuantity = React.useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const decreaseQuantity = React.useCallback(() => {
    if (quantity == 0) {
      return;
    } else setQuantity(quantity - 1);
  }, [quantity]);

  return (
    <VStack px="2" borderBottomColor="gray.200" borderBottomWidth={2}>
      <HStack
        w="100%"
        space="3"
        alignItems="center"
        my="2"

        //borderBottomColor="gray.200"
        // borderBottomWidth="1"
      >
        <Image
          resizeMode="stretch"
          source={{ uri: props.image }}
          alt={props.title}
          style={styles.image}
        />

        <Box flexDirection="column" width="80%" px="1" display="flex">
          <Text flexWrap="wrap" fontSize="sm">
            {props.title}
          </Text>
          <HStack space="3" alignItems="center">
            <Text fontSize="lg" fontWeight="bold">
              ₵ {props.price}
            </Text>
          </HStack>
        </Box>
      </HStack>
      <HStack justifyContent="space-between" px="2" pb="2">
        <Button
          size="xs"
          bg="transparent"
          _text={{ fontSize: "xs" }}
          variant="ghost"
          leftIcon={<FontAwesome5 name="trash-alt" size={18} color="#eab308" />}
        >
          REMOVE
        </Button>
        <HStack justifyContent="space-between" w="30%" alignItems="center">
          <IconButton
            variant="solid"
            bg="#eab308"
            onPress={decreaseQuantity}
            _pressed={{ backgroundColor: "#ca8a04" }}
            size="sm"
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
            size="sm"
            _icon={{
              as: Feather,
              name: "plus",
            }}
          />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
  },
});
