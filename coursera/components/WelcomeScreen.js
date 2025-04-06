import * as React from "react";
import { View, Text } from "react-native";

export default function WelcomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          padding: 40,
          fontSize: 32,
          color: "white",
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        Welcome to the Little Lemon app
      </Text>
      <Text
        style={{
          fontSize: 24,
          color: "white",
          textAlign: "center",
        }}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}
