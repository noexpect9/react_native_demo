import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          title: "Login",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="forgot"
        options={{
          title: "Forgot",
        }}
      />
      <Stack.Screen
        name="emailSignup"
        options={{
          title: "EmailSignup",
        }}
      />
    </Stack>
  );
}
