import React from "react";
import { View, Text, ScrollView } from "react-native";

const green = "#495E57";
const yellow = "#F4CE14";

const menuItems = [
  "Hummus \nMoutabal \nFalafel \nMarinated Olives \nKofta \nEggplant Salad \nLentil Burger \nSmoked Salmon \nKofta Burger \nTurkish Kebab \nFries \nButtered Rice \nSpinach Pie",
];

export default function MenuItems() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal={true}
        indicatorStyle="white"
        style={{ padding: 20, backgroundColor: green }}
      >
        <Text style={{ fontSize: 40, flexWrap: "wrap", color: "white" }}>
          View Menu
        </Text>
        <Text style={{ fontSize: 24, color: "white" }}>{menuItems[0]}</Text>
      </ScrollView>
    </View>
  );
}
