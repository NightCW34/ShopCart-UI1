import React from "react";
import { Header } from "@rneui/base";

const AppHeader = () => {
  return (
    <Header
      backgroundColor="white"
      centerComponent={{
        text: "Any Ecommerce",
        style: {
          color: "#333A3A",
          fontSize: 24,
          fontFamily: "Rotunda-Light",
        },
      }}
      centerContainerStyle={{ justifyContent: "center" }}
      containerStyle={{ width: 400, height: 55 }}
      leftComponent={{
        icon: "menu",
        color: "#333333",
        type: "simple-line-icon",
      }}
      leftContainerStyle={{ marginLeft: 10 }}
      placement="center"
      rightComponent={{
        icon: "shopping-cart",
        type: "feather",
        color: "#333333",
      }}
      rightContainerStyle={{ marginRight: 10 }}
    />
  );
};

export default AppHeader;
