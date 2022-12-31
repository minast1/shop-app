import { StyleSheet, View } from "react-native";
import React from "react";
import { AspectRatio, Text, Image, Pressable, VStack } from "native-base";
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
            //borderWidth={1}
            h="72"
            space="2"
            overflow="hidden"
            m="2"
            style={{ transform: [{ scale: isPressed ? 0.99 : 1 }] }}
          >
            <AspectRatio w="100%" ratio={16 / 18}>
              <Image
                //resizeMode="cover"
                source={{ uri: image }}
                alt={title}
                //  style={styles.image}
              />
            </AspectRatio>

            <Text>{title}</Text>
          </VStack>
        );
      }}
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  image: {
    width: 190,
    height: 220,
  },
});
