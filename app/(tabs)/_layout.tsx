import { Tabs } from "expo-router";
import { Text } from "react-native";

function Icon({ label }: { label: string }) {
  return <Text style={{ fontSize: 20 }}>{label}</Text>;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2D5A27",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: { backgroundColor: "#fff", borderTopColor: "#E8E8E8", paddingBottom: 8, height: 58 },
        tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: () => <Icon label="Home" /> }} />
      <Tabs.Screen name="two" options={{ title: "Videos", tabBarIcon: () => <Icon label="Videos" /> }} />
      <Tabs.Screen name="three" options={{ title: "Quiz", tabBarIcon: () => <Icon label="Quiz" /> }} />
      <Tabs.Screen name="four" options={{ title: "Tips", tabBarIcon: () => <Icon label="Tips" /> }} />
    </Tabs>
  );
}
