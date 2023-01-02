import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, Image, Pressable, VStack } from "native-base";
import { dataProps } from "../src/lib/api";

const ProductCard = ({
  id,
  title,
  image,
  description,
  category,
  price,
  onPress,
}: dataProps & { onPress: () => void }) => {
  return (
    <Pressable onPress={onPress}>
      {({ isPressed }) => {
        return (
          <VStack
            w="48"
            h="72"
            space="1"
            m="1"
            style={{ transform: [{ scale: isPressed ? 0.99 : 1 }] }}
          >
            <Image
              resizeMode="stretch"
              source={{ uri: image }}
              alt={title}
              style={styles.image}
            />

            <Text isTruncated maxW="400" w="100%">
              {title}
            </Text>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="#eab308"
              alignSelf="center"
            >
              ₵ {price}.00
            </Text>
          </VStack>
        );
      }}
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 210,
  },
});
