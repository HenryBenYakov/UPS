import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "./navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigator/RootNavigator";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

export type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

export type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "MyModal">
>;

export type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

export type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;

export type Customer = {
  email: string;
  name: string;
};

export type CustomerList = {
  name: ID;
  value: Customer;
};

export type TrackingItem = {
  customer_id: ID;
  customer: Customer;
  items: Item[];
};

export type Item = {
  item_id: ID;
  name: string;
  price: number;
  quantity: number;
};

export type OrderResponse = {
  value: Order;
};

export type CustomerResponse = {
  name: ID;
  value: Customer;
};

export type Order = {
  carrier: string;
  createdAt: string;
  shippingCost: number;
  trackingId: string;
  trackingItems: TrackingItem;
  Lat: number;
  Lng: number;
  Address: string;
  City: string;
};
