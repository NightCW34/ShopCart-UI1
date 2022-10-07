import React from "react";
import AppHeader from "../components/AppHeader";
import ItemList from "../components/ItemList";
import ItemPromo from "../components/itemsPromo";
import BottomItems from "../components/bottomitems";
import { View, StyleSheet, Text } from "react-native";
import BottomTab from "../components/BottomTab";

const Cart = () => {
  return (
    <View>
      <AppHeader />
      <View style={styles.promoContainer}>
        <Text style={styles.regularText}>Ship for </Text>
        <Text style={styles.boldText}>AED 75 more for free shipping</Text>
      </View>
      <Text style={styles.titleText}>My Cart</Text>
      <ItemList Size="45" Price="45" />
      <ItemPromo Size="39" Price="50" />
      <BottomItems />
      <BottomTab />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  promoContainer: {
    backgroundColor: "#333333",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  regularText: {
    fontFamily: "Rotunda-Thin",
    fontSize: 15,
    color: "#FFFFFF",
  },
  boldText: {
    fontFamily: "Nexa-Regular",
    fontSize: 15,
    color: "#FFFFFF",
  },
  titleText: {
    textAlign: "center",
    marginBottom: 5,
    marginTop: 15,
    fontFamily: "Rotunda-Light",
    fontSize: 23,
    color: "#333A3A",
  },
});
