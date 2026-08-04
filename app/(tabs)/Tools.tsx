import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Tools() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Tools are in here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
