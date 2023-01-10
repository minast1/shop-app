import { StyleSheet } from "react-native";
import React from "react";
import { Box, Button, Text } from "native-base";
import { signOut } from "firebase/auth";
import { auth } from "../src/lib/firebaseConfig";

const ProfileScreen = () => {
  return (
    <Box flex={1} alignSelf="center" justifyContent="center">
      <Text fontSize="lg">Welcome to your shop..🙂 </Text>
      <Button
        onPress={() => {
          signOut(auth).catch((error) => console.log(error));
        }}
      >
        SignOut
      </Button>
    </Box>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
