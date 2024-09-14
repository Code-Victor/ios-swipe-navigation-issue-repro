import { Pressable, PressableProps, Text } from "react-native";
import * as React from "react";

export default function Button({
  children,
  ...props
}: { children: React.ReactNode } & PressableProps) {
  return (
    <Pressable
      {...props}
      style={{
        backgroundColor: "#2f3337",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          lineHeight: 24,
          fontWeight: "600",
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}
