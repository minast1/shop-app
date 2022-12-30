import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Image, View, Text } from "native-base";

type dataType = { uri: any };

const MainCarousel = () => {
  const [data, setData] = React.useState<dataType[]>([
    { uri: require("../assets/images/fash1.jpg") },
    { uri: require("../assets/images/bg.webp") },
    { uri: require("../assets/images/bg2.webp") },
    { uri: require("../assets/images/shoe.jpeg") },
  ]);

  const width = Dimensions.get("window").width;
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
      renderItem={({ item, index }) => (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <ImageBackground source={item.uri} style={styles.image} />
        </View>
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
