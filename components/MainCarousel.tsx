import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Image, View, Text, Pressable } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { carouselDataType, CarouselToCatgoriesParamList } from "../src/types";

type Props = { carouselData: carouselDataType[] };
//type navigationType = CarouselToCatgoriesParamList["navigation"];
type routeType = CarouselToCatgoriesParamList["route"];
const MainCarousel = ({ carouselData }: Props) => {
  const [data, setData] = React.useState<carouselDataType[]>(carouselData);

  const width = Dimensions.get("window").width;
  // const navigation = useNavigation<navigationType>();
  const route = useRoute<routeType>();

  return (
    <Carousel
      width={width * 0.94}
      height={route.name === "Home" ? width / 2.0 : width / 1.3}
      pagingEnabled={true}
      style={{ borderRadius: 8, marginTop: route.name === "Home" ? 25 : 10 }}
      scrollAnimationDuration={1000}
      loop
      autoPlay={true}
      autoPlayInterval={2000}
      data={data}
      // pagingEnabled={isPagingEnabled}
      renderItem={({ item, index }) => (
        <Pressable
          //onPress={() => navigation.navigate('Home',{screen: name as string })}
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Image
            source={
              typeof item.image.uri === "string" ? item.image : item.image.uri
            }
            style={styles.image}
            height={
              route.name === "Home"
                ? Dimensions.get("window").width / 1.8
                : Dimensions.get("window").width / 1.3
            }
            width={
              route.name === "Home"
                ? Dimensions.get("window").width * 0.94
                : Dimensions.get("window").width * 0.89
            }
            alt={item.name ? item.name : "Product Item"}
            marginLeft={route.name === "Home" ? 0 : 4}
          />
        </Pressable>
      )}
    />
  );
};

export default MainCarousel;

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",

    //width: Dimensions.get("window").width * 0.94,
    // height: Dimensions.get("window").width / 1.8,
  },
});
