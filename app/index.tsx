import MyButton from "@/src/components/Button1";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  function SignUpScreenOn() {
    router.push({ pathname: "/(auth)/Login" });
  }
  function LoginScreenOn() {
    router.push({ pathname: "/(tabs)/Home" });
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "blue" }}>
        Hi
      </Text>
      <MyButton onPress={SignUpScreenOn} label={"signup"} />
      <MyButton onPress={LoginScreenOn} label={"login"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
