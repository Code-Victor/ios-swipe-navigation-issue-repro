import { Stack } from "expo-router";

export default function InnerInnerStack() {
  console.log("In inner layout");
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack />
    </>
  );
}
