import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text } from "expo-router/build/react-navigation";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "",
        tabBarInactiveTintColor: "black",
        tabBarInactiveBackgroundColor: "white",
        headerShown: true,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarButton: ({ onPress, style, children }) => (
          <TouchableOpacity
            onPress={onPress as (event: GestureResponderEvent) => void}
            style={style}
            activeOpacity={1}
          >
            {children}
          </TouchableOpacity>
        ),
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e5e5e5",
        },
      }}
    >
      <Tabs.Screen
        name="Chats"
        options={{
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          title: "Kasper",
          headerShown: true,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: color,
                fontSize: focused ? 14 : 11,
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              Chats
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "chatbubble" : "chatbubble-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Calls"
        options={{
          headerTitleAlign: "center",
          title: "Calls",
          headerShown: true,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: color,
                fontSize: focused ? 14 : 11,
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              Calls
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "call" : "call-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Updates"
        options={{
          headerTitleAlign: "center",
          title: "Updates",
          headerShown: true,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: color,
                fontSize: focused ? 14 : 11,
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              Updates
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "chatbubbles" : "chatbubbles-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Tools"
        options={{
          headerTitleAlign: "center",
          title: "Tools",
          headerShown: true,
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: color,
                fontSize: focused ? 14 : 11,
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              Tools
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "bar-chart" : "bar-chart-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
