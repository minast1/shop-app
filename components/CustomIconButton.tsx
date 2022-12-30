import { StyleSheet } from "react-native";
import React from "react";
import { Image, Pressable, Text, VStack } from "native-base";
import { InterfaceVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";
import { useNavigation } from "@react-navigation/native";

interface appProps extends InterfaceVStackProps {
  name?: string;
  uri: any;
  onPress?: () => void;
}
const CustomIconButton = ({ name, uri, onPress, ...props }: appProps) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={onPress}>
      {({ isPressed }) => {
        return (
          <VStack
            {...props}
            alignItems="center"
            space={props.space ? props.space : 0}
            //bg={isPressed ? "coolGray.100" : "white"}
            borderRadius={isPressed ? 15 : 0}
            style={{ transform: [{ scale: isPressed ? 0.95 : 1 }] }}
          >
            <Image
              size={60}
              borderRadius={90}
              source={uri}
              alt="Alternate Text"
            />
            {name && (
              <Text fontSize={14} fontFamily="body" fontWeight={400}>
                {name}
              </Text>
            )}
          </VStack>
        );
      }}
    </Pressable>
  );
};

export default CustomIconButton;

const styles = StyleSheet.create({});
