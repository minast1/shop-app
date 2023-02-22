import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, Image, Text, VStack, View } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const Notification = () => {
  const width = Dimensions.get("screen").width;

  return (
    <Box flex={1} position="relative" w={width} height={200} bgColor="#d4d4d4">
      <LinearGradient
        colors={["#000000", "#f5f5f5"]}
        locations={[0.9, 0.9]}
        start={[0.0, 0.6]}
        end={[0.6, 1.0]}
        style={{ flex: 1 }}
      />
      <VStack
        // alignSelf="center"
        position="absolute"
        top="16"
        left="2"
        alignItems="center"
        justifyContent="center"
        //ml="3"
      >
        <Text color="white" fontSize={20} fontWeight="extrabold">
          Hot digital products
        </Text>
        <Box borderWidth={1} bg="#a1a1aa" p="1" borderRadius="lg">
          <Text color="white" fontSize={13} fontWeight="bold">
            Many benefits are waiting for you
          </Text>
        </Box>
      </VStack>
      <Image
        size="xl"
        position="absolute"
        shadow={4}
        top="7"
        left="4/6"
        source={require("../assets/images/clothes.png")}
        alt="Alternate Text"
      />
    </Box>
  );
};

export default Notification;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "#a1a1aa",
  },
  triangleCorner1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 290,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 50,
    borderTopWidth: 231,
    borderRightColor: "transparent",
    borderTopColor: "black",
  },
});
