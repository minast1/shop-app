import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, HStack, Image, Text, VStack } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const Notification = () => {
  return (
    <HStack style={styles.main} flex={1}>
      <View style={styles.triangleCorner1} />
      <VStack
        alignSelf="center"
        alignItems="center"
        justifyContent="center"
        ml="3"
      >
        <Text color="white" fontSize={23} fontWeight="extrabold">
          Hot digital products
        </Text>
        <Box borderWidth={1} bg="#a1a1aa" p="1" borderRadius="lg">
          <Text color="white" fontSize={13} fontWeight="bold">
            Many benefits are waiting for you
          </Text>
        </Box>
      </VStack>
      <Box alignSelf="center" ml="8">
        <Image
          size={130}
          source={require("../assets/images/bg.png")}
          alt="Alternate Text"
        />
      </Box>
    </HStack>
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
