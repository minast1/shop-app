import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Image, Pressable, Text, VStack } from "native-base";
import { InterfaceVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

interface appProps extends InterfaceVStackProps {
  name?: string;
  uri: any;
  onPress?: () => void;
}
const CategoryShortcut = ({ name, uri, onPress, ...props }: appProps) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={onPress}>
      {({ isPressed }) => {
        return (
          <Box
            {...props}
            position="relative"
            borderRadius={10}
            w={110}
            h={100}
            style={{ transform: [{ scale: isPressed ? 0.98 : 1 }] }}
          >
            <LinearGradient
              colors={["#22d3ee", "#99f6e4"]}
              locations={[0.6, 0.6]}
              start={[0.0, 0.8]}
              end={[0.6, 1.0]}
              style={{ flex: 1, borderRadius: 6 }}
            />
            <Text
              fontSize={12}
              fontFamily="body"
              fontWeight="extrabold"
              position="absolute"
              top="1"
              left="1"
            >
              {name}
            </Text>
            <Image
              size="md"
              position="absolute"
              shadow={4}
              top="5"
              left="6"
              source={uri}
              alt="Alternate Text"
            />
          </Box>
        );
      }}
    </Pressable>
  );
};

export default CategoryShortcut;

const styles = StyleSheet.create({});
