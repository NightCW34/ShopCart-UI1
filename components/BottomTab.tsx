import React from "react";
import { Tab } from "@rneui/themed";

const BottomTab = () => {
  return (
    <Tab
      variant="primary"
      containerStyle={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <Tab.Item
        icon={{
          name: "home",
          type: "font-awesome",
          color: "#A0A0A0",
          size: 30,
        }}
      ></Tab.Item>
      <Tab.Item
        icon={{
          name: "search1",
          type: "antdesign",
          color: "#A0A0A0",
          size: 30,
        }}
      ></Tab.Item>
      <Tab.Item
        icon={{
          name: "star",
          type: "font-awesome ",
          color: "#A0A0A0",
          size: 30,
        }}
      ></Tab.Item>
      <Tab.Item
        icon={{
          name: "user",
          type: "font-awesome",
          color: "#A0A0A0",
          size: 30,
        }}
      ></Tab.Item>
    </Tab>
  );
};

export default BottomTab;
