import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon, IInputProps, Input, Pressable } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const PasswordToggleInput = ({ ...props }: IInputProps) => {
  const [show, setShow] = React.useState(false);
  return (
    <Input
      type={show ? "text" : "password"}
      _input={{ fontSize: "lg" }}
      InputRightElement={
        <Pressable onPress={() => setShow(!show)}>
          <Icon
            as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
            size={6}
            mr="2"
            color="muted.400"
          />
        </Pressable>
      }
      {...props}
    />
  );
};

export default PasswordToggleInput;

const styles = StyleSheet.create({});
