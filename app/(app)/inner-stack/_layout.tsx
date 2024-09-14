import { Stack } from "expo-router";

export default function InnerStack() {
  console.log("In inner layout");
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack />
    </>
  );
}
