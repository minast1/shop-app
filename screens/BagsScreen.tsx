import { Dimensions, RefreshControl, StyleSheet } from "react-native";
import React from "react";
import { Box, FlatList, HStack, ScrollView, View, Text } from "native-base";
import ProductCard from "../components/ProductCard";
import CategoriesSearchBar from "../components/CategoriesSearchBar";
import { useQuery } from "@tanstack/react-query";
import { dataProps, fetchProducts } from "../src/lib/api";
import { useRefreshByUser } from "../hooks/useRefreshByUser";
import { useRefreshOnFocus } from "../hooks/useRefreshOnFocus";
import Loading from "../components/Loading";
import { useNavigation } from "@react-navigation/native";
import { CategoryStackParams } from "../src/types";

type navProps = CategoryStackParams["navigation"];

const BagsScreen = () => {
  const { isLoading, error, data, refetch } = useQuery<dataProps[], Error>(
    ["cloths"],
    fetchProducts
  );
  const navigation = useNavigation<navProps>();
  const numColumns = 2;
  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);
  useRefreshOnFocus(refetch);
  if (error)
    return (
      <Box flex={1} alignSelf="center" justifyContent="center">
        <Text fontSize="lg">{error.message}</Text>
      </Box>
    );
  return (
    <View pt="3" flex={1} bg="white" alignItems="center">
      <CategoriesSearchBar />
      <Box>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) =>
              isLoading ? (
                <Loading />
              ) : (
                <ProductCard
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  category={item.category}
                  price={item.price}
                  onPress={() =>
                    navigation.navigate("ProductDetail", { ...item })
                  }
                />
              )
            }
            refreshControl={
              <RefreshControl
                refreshing={isRefetchingByUser}
                onRefresh={refetchByUser}
              />
            }
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            snapToAlignment="end"
            decelerationRate={"fast"}
            snapToInterval={Dimensions.get("window").height}
          />
        )}
      </Box>
    </View>
  );
};
export default BagsScreen;

const styles = StyleSheet.create({});
