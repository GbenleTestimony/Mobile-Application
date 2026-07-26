import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync;

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        options={{
          headerShown: true,
          title: "Login",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Register"
        options={{ headerShown: true, title: "SignUp" }}
      />
      <Stack.Screen
        name="Forgot-password"
        options={{ headerShown: false, title: "Forgot-Password" }}
      />
    </Stack>
  );
}
