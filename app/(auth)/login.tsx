import MyButton from "@/src/components/Button1";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

const router = useRouter();

function LogUserIn() {
  router.replace("/Home");
}

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput></TextInput>
      <MyButton label="Login" onPress={LogUserIn} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: "auto",
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
