import * as React from "react";
import { View, Text } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View
      style={{ backgroundColor: "#F3D031", paddingTop: 10, paddingBottom: 30 }}
    >
      <Text
        style={{
          fontSize: 18,
          color: "#111111",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        All Rights Reserved by Little Lemon, 2024
      </Text>
    </View>
  );
}
