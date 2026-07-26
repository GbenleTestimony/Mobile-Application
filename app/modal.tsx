import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Modal() {
  const router = useRouter();

  function handle() {
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subtitle}>Here is the modal</Text>
      <Button title="Click" color="blue" onPress={handle}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
