import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Image, View, Text, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { CarouselToCatgoriesParamList } from "../src/types";

type dataType = { uri: any; name: string };
type navigationType = CarouselToCatgoriesParamList["navigation"];
const MainCarousel = () => {
  const [data, setData] = React.useState<dataType[]>([
    { uri: require("../assets/images/fash1.jpg"), name: "Clothes" },
    { uri: require("../assets/images/bg.webp"), name: "Bags" },
    { uri: require("../assets/images/bg2.webp"), name: "Shoes" },
    { uri: require("../assets/images/shoe.jpeg"), name: "Others" },
  ]);

  const width = Dimensions.get("window").width;
  const navigation = useNavigation<navigationType>();

  return (
    <Carousel
      width={width * 0.94}
      height={width / 1.8}
      pagingEnabled={true}
      style={{ borderRadius: 8, marginTop: 25 }}
      scrollAnimationDuration={1000}
      loop
      autoPlay={true}
      autoPlayInterval={2000}
      data={data}
      // pagingEnabled={isPagingEnabled}
      renderItem={({ item: { uri, name }, index }) => (
        <Pressable
          onPress={() => navigation.navigate(name as any)}
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <ImageBackground source={uri} style={styles.image} />
        </Pressable>
      )}
    />
  );
};

export default MainCarousel;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
  },
});
