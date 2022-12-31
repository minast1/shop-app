import { StyleSheet } from "react-native";
import React from "react";
import { FlatList, Skeleton, VStack } from "native-base";

const Loading = () => {
  const loadingData = [
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
  ];
  const numColumns = 2;
  return (
    <FlatList
      data={loadingData}
      renderItem={({ item }) => (
        <VStack
          w="48"
          //borderWidth={1}
          h="72"
          space="2"
          overflow="hidden"
          m="2"
        >
          <Skeleton h="40" />
          <Skeleton.Text px="4" />
        </VStack>
      )}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
    />
  );
};

export default Loading;

const styles = StyleSheet.create({});
