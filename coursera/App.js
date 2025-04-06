import React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#4A5F58",
      }}
    >
      <LittleLemonHeader />
      <WelcomeScreen />
      <MenuItems />
      <LittleLemonFooter />
    </View>
  );
}
