import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "",
        tabBarInactiveBackgroundColor: "white",
        headerShown: true,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e5e5e5",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerTitleAlign: "center",
          title: "Home",
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          headerTitleAlign: "center",
          title: "Settings",
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "people-outline" : "people-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
