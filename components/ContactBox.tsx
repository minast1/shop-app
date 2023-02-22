import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Divider, HStack, Text } from "native-base";

const width = Dimensions.get("window").width;

const ContactBox = () => {
  return (
    <HStack
      py="2"
      space="2"
      mt="3"
      px="2"
      borderRadius="4"
      style={{
        width: width * 0.94,
        //borderWidth: 1,
        backgroundColor: "#eab308",
      }}
    >
      <Text color="white" fontSize="sm">
        Helpline: 024 4345594
      </Text>
      <Divider orientation="vertical" mx="3" />
      <Text color="white" fontSize="sm">
        WhatsApp : 024 4345594
      </Text>
    </HStack>
  );
};

export default ContactBox;

const styles = StyleSheet.create({});
