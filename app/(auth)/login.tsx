import MyButton from "@/src/components/Button1";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function Login() {
  const router = useRouter();

  function LogUserIn() {
    router.replace("/Home");
  }
  const [isSecure, setIsSecure] = useState(true);

  return (
    <ImageBackground
      source={require("../../assets/myImages/backgroundImg2.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign in</Text>
        <TextInput
          selectionColor="white"
          cursorColor="white"
          placeholderTextColor={"white"}
          style={[styles.input, { borderColor: "white" }]}
          placeholder="Username..."
        ></TextInput>
        <TextInput
          selectionColor="white"
          cursorColor="white"
          style={[styles.input, { borderColor: "white" }]}
          secureTextEntry={isSecure}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          placeholderTextColor={"white"}
        ></TextInput>
        <MyButton label="Login" onPress={LogUserIn} />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 300,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
    borderColor: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  input: {
    margin: 20,
    paddingHorizontal: 5,
    color: "white",
    width: 200,
    fontSize: 16,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
