import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack } from "native-base";
import CustomIconButton from "./CustomIconButton";
import { ProductDetailToAuthStackList } from "../src/types";
import { useNavigation } from "@react-navigation/native";

type navigationParams = ProductDetailToAuthStackList["navigation"];
const OptionsComponent = () => {
  const navigation = useNavigation<navigationParams>();
  return (
    <HStack
      justifyContent="space-between"
      my="3"
      shadow="1"
      mx="3"
      bg="white"
      p="3"
      borderRadius="lg"
    >
      <CustomIconButton
        name="Chat"
        uri={require("../assets/icons/watsie.png")}
      />
      <CustomIconButton
        name="Invite"
        uri={require("../assets/icons/invite.png")}
      />
      <CustomIconButton
        name="Register"
        uri={require("../assets/icons/reg.png")}
        onPress={() => navigation.navigate("Register")}
      />
      <CustomIconButton
        name="Notifications"
        uri={require("../assets/icons/noti.png")}
      />
    </HStack>
  );
};

export default OptionsComponent;

const styles = StyleSheet.create({});
