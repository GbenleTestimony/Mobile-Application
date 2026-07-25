import { Link, useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  function loginUser() {
    router.push(`/home`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <Button
        title={"Home"}
        color={"blue"}
        onPress={() => {
          loginUser;
        }}
      ></Button>
      <Link href={"/modal"}>Modal</Link>
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
});
