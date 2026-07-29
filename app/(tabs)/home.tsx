import MyButton from "@/src/components/Button1";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  function reachModal() {
    router.push("/modal");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subtitle}>Welcome to my react-native app</Text>
      <MyButton label="modal" onPress={reachModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});
