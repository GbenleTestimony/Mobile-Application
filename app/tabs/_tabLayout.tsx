// import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          // tabBarIcon: () => <Ionicons name="home" size={24} />,
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
