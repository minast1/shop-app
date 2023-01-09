import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import { dataProps } from "./lib/api";

export type carouselDataType = { image: { uri: any }; name?: string };

export type HomeStackParamList = {
  Home: undefined;
  Search: undefined;
};
export type RootParamList = {
  Root: undefined;
  Login: undefined;
  Register: undefined;
};

export type TabParamList = {
  HomeTab: undefined;
  Categories: undefined;
  Me: undefined;
  Cart: undefined;
};
export type HomeTabStackList = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "HomeTab">,
  StackScreenProps<HomeStackParamList, "Home">
>;

export type combinedTypes = CompositeScreenProps<
  CompositeScreenProps<
    StackScreenProps<RootParamList>,
    BottomTabScreenProps<TabParamList>
  >,
  StackScreenProps<HomeStackParamList>
>;

type MaterialTabsParamList = {
  Clothes: undefined;
  Bags: undefined;
  Shoes: undefined;
  Others: undefined;
};

export type ProductDetailToAuthStackList = CompositeScreenProps<
  StackScreenProps<RootParamList>,
  StackScreenProps<CategoryStackList, "ProductDetail">
>;

export type CarouselToCatgoriesParamList = CompositeScreenProps<
  StackScreenProps<HomeStackParamList, "Home">,
  MaterialTopTabScreenProps<MaterialTabsParamList>
>;

export type CategoryStackList = {
  CategoriesTab: undefined;
  ProductDetail: dataProps;
};
export type CategoryStackParams = CompositeScreenProps<
  MaterialTopTabScreenProps<MaterialTabsParamList>,
  StackScreenProps<CategoryStackList, "CategoriesTab">
>;
