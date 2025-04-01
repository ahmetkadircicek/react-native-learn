import * as React from "react";
import { View, Text } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View
      style={{ backgroundColor: "#F3D031", paddingTop: 60, paddingBottom: 10 }}
    >
      <Text
        style={{
          fontSize: 32,
          color: "#111111",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
}
