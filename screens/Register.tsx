import { StyleSheet } from "react-native";
import React from "react";
import { Avatar, Text, View, VStack } from "native-base";

const Register = () => {
  return (
    <View pt="3" flex={1} bg="white" alignItems="center">
      <VStack alignItems="center" px="6" mt="16">
        <Avatar
          alignSelf="center"
          bg="amber.500"
          size="xl"
          source={{
            uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          }}
        >
          Modest
        </Avatar>
        <Text bold fontSize="lg">
          Create your account
        </Text>
        <Text fontSize="md">
          Let's get started by creating your account. To keep your account safe
          we need a strong password
        </Text>
      </VStack>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
