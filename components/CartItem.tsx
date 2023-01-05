import { StyleSheet } from "react-native";
import React from "react";
import {
  Button,
  HStack,
  Image,
  Text,
  VStack,
  Select,
  CheckIcon,
} from "native-base";
import { dataProps } from "../src/lib/api";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ ...props }: dataProps) => {
  const [service, setService] = React.useState("1");

  return (
    <HStack
      w="100%"
      space="3"
      alignItems="center"
      my="2"
      pb="3"
      borderBottomColor="gray.200"
      borderBottomWidth="1"
    >
      <Image
        resizeMode="stretch"
        source={{ uri: props.image }}
        alt={props.title}
        style={styles.image}
      />
      <VStack w="72">
        <Text fontSize="sm">{props.title}</Text>
        <HStack space="3" alignItems="center">
          <Text fontSize="lg" fontWeight="bold">
            {" "}
            ₵ {props.price}
          </Text>
          <Select
            borderColor="#eab308"
            borderWidth="2"
            selectedValue={service}
            w="24"
            accessibilityLabel="Quantity"
            placeholder="Qty"
            _selectedItem={{
              bg: "teal.600",
              endIcon: (
                <Ionicons name="ios-chevron-down" size={4} color="black" />
              ),
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="1" value="1" />
            <Select.Item label="2" value="2" />
            <Select.Item label="3" value="3" />
            <Select.Item label="4" value="4" />
            <Select.Item label="5" value="5" />
          </Select>
          <Button size="xs" w="27%">
            Delete
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
  },
});
