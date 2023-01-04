import axios, { AxiosError } from "axios";

export type dataProps = {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
  category: string;
};

export async function fetchProducts() {
  let data;
  try {
    data = await axios.get("https://fakestoreapi.com/products");
  } catch (error: any) {
    throw new Error(error);
  }
  return data.data;
}

export type userCartProps = {
  id: number;
  userId?: number;
  data: string;
  products: dataProps[];
};
export async function getUserCart() {
  let data;
  try {
    data = await axios.get("https://fakestoreapi.com/carts/5");
  } catch (error: any) {
    throw new Error(error);
  }
  return data.data;
}
