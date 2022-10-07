import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ListItem, Image, Icon, Button } from "@rneui/themed";

const ItemList = ({ Size, Price }: { Size: string; Price: string }) => {
  return (
    <View>
      <ListItem
        Component={View}
        containerStyle={{ backgroundColor: "#F5F5F5", margin: 10 }}
      >
        <Image
          source={require("../assets/images/Zapato.png")}
          style={styles.imageitem}
        ></Image>

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
          <ListItem.Title style={{ marginTop: 30 }}>
            <Text style={{ fontFamily: "Lato-Bold", fontSize: 20 }}>
              AED {Price}
            </Text>
          </ListItem.Title>
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

export default ItemList;

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
});
