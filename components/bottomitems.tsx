import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { Button } from "@rneui/themed";

const BottomItems = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <TextInput placeholder="Coupon Code" style={styles.code_input} />
        <Button
          title="APPLY"
          type="outline"
          titleStyle={{ fontFamily: "Rotunda-Light", color: "#000000" }}
          containerStyle={{ width: "37%" }}
          buttonStyle={styles.btn_app}
        />
      </View>
      <View style={styles.container_totals}>
        <View>
          <Text style={styles.text_list}>Subtotal:</Text>
          <Text style={styles.text_list}>Discount:</Text>
          <Text style={styles.text_list}>VAT:</Text>
          <Text style={styles.text_list}>Total:</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Text style={styles.text_price}>AED 126.57</Text>
          <Text style={styles.text_price}>-AED 21.31</Text>
          <Text style={styles.text_price}>AED 5.26</Text>
          <Text style={styles.text_price}>AED 125.52</Text>
        </View>
      </View>
      <Button
        title="PROCEED TO PAYMENT"
        titleStyle={{ fontFamily: "Rotunda-Light", fontSize: 18 }}
        containerStyle={{ width: "99%", marginLeft: 3, marginTop: 40 }}
        buttonStyle={styles.btn_totals}
      />
    </View>
  );
};

export default BottomItems;

const styles = StyleSheet.create({
  code_input: {
    backgroundColor: "#F5F5F5",
    height: 60,
    width: "60%",
    padding: 15,
    fontFamily: "Rotunda-Light",
    marginRight: 9,
  },
  btn_app: {
    height: 60,
    borderWidth: 2,
    borderColor: "#000000",
  },
  btn_totals: {
    height: 60,
    backgroundColor: "#333333",
  },
  text_list: {
    fontFamily: "Rotunda-Light",
    padding: 6,
    color: "#67686E",
  },
  text_price: {
    fontFamily: "Lato-Bold",
    padding: 4,
    textAlign: "left",
    fontSize: 12,
    color: "#333A3A",
  },
  container_totals: {
    backgroundColor: "#F5F5F5",
    margin: 10,
    flexDirection: "row",
  },
});
