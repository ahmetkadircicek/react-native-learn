import * as React from "react";
import { Image, StyleSheet, Platform, View } from "react-native";

import LittleLemonHeader from "@/components/LittleLemonHeader";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", padding: 45 }}>
      <LittleLemonHeader />
    </View>
  );
}
