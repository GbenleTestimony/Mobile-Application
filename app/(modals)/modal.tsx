import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Click the button below to return</Text>
      <Button
        color={"blue"}
        title="Exit"
        onPress={() => router.push("/tabs/home")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontFamily: "sans-serif",
  },
  button: {
    width: 70,
    height: 30,
    backgroundColor: "blue",
    borderRadius: 50,
  },
});
