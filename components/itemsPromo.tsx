import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ListItem, Image, Icon } from "@rneui/themed";

const ItemPromo = ({ Size, Price }: { Size: string; Price: string }) => {
  return (
    <View>
      <ListItem
        Component={View}
        containerStyle={{ backgroundColor: "#F5F5F5", margin: 10 }}
      >
        <View>
          <Image
            source={require("../assets/images/Zapato.png")}
            style={styles.imageitem}
          ></Image>
          <Text style={styles.off_text}>50% OFF</Text>
        </View>
        <ListItem.Content>
          <ListItem.Subtitle style={styles.subtext}>
            <Text>Aldo</Text>
          </ListItem.Subtitle>
          <ListItem.Title style={styles.maintext}>
            <Text>Almond Toe</Text>
          </ListItem.Title>
          <ListItem.Title>
            <Text style={styles.sizetext}>Size: {Size} us</Text>
          </ListItem.Title>
          <View style={styles.promoContainer}>
            <Text style={styles.textpromo}>AED {Price}</Text>
            <Text style={styles.discount}>AED 50</Text>
          </View>
        </ListItem.Content>
        <View>
          <TouchableOpacity style={styles.btn_style}>
            <Icon name="plus" type="entypo" size={25} />
          </TouchableOpacity>
          <Text style={styles.counter}>1</Text>
          <TouchableOpacity style={styles.btn_style}>
            <Icon name="minus" type="entypo" size={25} />
          </TouchableOpacity>
        </View>
      </ListItem>
    </View>
  );
};

export default ItemPromo;

const styles = StyleSheet.create({
  imageitem: {
    width: 120,
    height: 120,
  },
  subtext: {
    fontFamily: "Rotunda-Light",
    color: "#74848E",
  },
  maintext: {
    fontFamily: "Texta-Medium",
    fontSize: 20,
  },
  sizetext: {
    fontFamily: "Lato-Bold",
    color: "#74848E",
  },
  textpromo: {
    fontFamily: "Lato-Bold",
    color: "#74848E",
    fontSize: 12,
    marginTop: 8,
    textDecorationLine: "line-through",
  },
  btn_style: {
    backgroundColor: "#FFFFFF",
    borderColor: "#CBD7E1",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  counter: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Nexa-Regular",
    margin: 10,
  },
  discount: {
    color: "#ff0000",
    fontFamily: "Lato-Bold",
    paddingLeft: 15,
    fontSize: 20,
  },
  promoContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  off_text: {
    backgroundColor: "#333A3A",
    width: "50%",
    color: "#FFFF",
    position: "absolute",
  },
});
