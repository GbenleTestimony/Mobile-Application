import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Chats() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Chats are here</Text>
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
