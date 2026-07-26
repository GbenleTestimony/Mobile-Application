import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync;

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          // headerShown: true,
          // title: "Index Page",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false, headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          title: "See",
        }}
      />
    </Stack>
  );
}
