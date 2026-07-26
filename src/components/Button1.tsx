import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  label: string;
  onPress: () => void;
}
export default function MyButton({ label, onPress }: ButtonProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 70,
    backgroundColor: "magenta",
    padding: 3,
    borderRadius: 5,
    margin: 15,
  },
  text: {
    color: "white",
    textTransform: "uppercase",
  },
});
