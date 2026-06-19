import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function RootLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="Home"></NativeTabs.Trigger>
      <NativeTabs.Trigger name="About"></NativeTabs.Trigger>
    </NativeTabs>
  );
}
