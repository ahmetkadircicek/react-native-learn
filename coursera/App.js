import React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#4A5F58",
      }}
    >
      <LittleLemonHeader />
      <LittleLemonFooter />
    </View>
  );
}
