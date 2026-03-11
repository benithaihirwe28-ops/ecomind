import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const tips = [
  { icon: "R", title: "Reduce, Reuse, Recycle", color: "#E8F5E2", iconColor: "#2D5A27" },
  { icon: "W", title: "Save Water", color: "#E8F0FB", iconColor: "#3A5FA0" },
  { icon: "T", title: "Choose Green Transport", color: "#FFF8E8", iconColor: "#C47A00" },
  { icon: "M", title: "Eat Less Meat", color: "#FFF0F0", iconColor: "#C43A3A" },
  { icon: "L", title: "Switch to LED Bulbs", color: "#FFFBE8", iconColor: "#B8860B" },
  { icon: "P", title: "Ditch Single-Use Plastic", color: "#F0E8FF", iconColor: "#7B4FA0" },
];

export default function TipsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Green Tips</Text>
        <View style={styles.divider} />
      </View>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {tips.map((tip, i) => (
          <View key={i} style={styles.tipCard}>
            <View style={[styles.iconBox, { backgroundColor: tip.color }]}>
              <Text style={[styles.iconText, { color: tip.iconColor }]}>{tip.icon}</Text>
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <View style={styles.tipLine} />
              <View style={styles.tipLine2} />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F0" },
  header: { backgroundColor: "#1C3D2E", paddingHorizontal: 20, paddingTop: 16, paddingBottom: 20 },
  title: { color: "#fff", fontSize: 26, fontWeight: "900", marginBottom: 10 },
  divider: { height: 3, width: 60, backgroundColor: "#4A7C59", borderRadius: 2 },
  scroll: { padding: 16 },
  tipCard: { flexDirection: "row", backgroundColor: "#fff", borderRadius: 12, padding: 14, marginBottom: 12, alignItems: "center", elevation: 2 },
  iconBox: { width: 48, height: 48, borderRadius: 24, justifyContent: "center", alignItems: "center", marginRight: 14 },
  iconText: { fontSize: 18, fontWeight: "900" },
  tipContent: { flex: 1 },
  tipTitle: { fontSize: 15, fontWeight: "700", color: "#1C3D2E", marginBottom: 6 },
  tipLine: { height: 6, backgroundColor: "#E8E8E8", borderRadius: 3, marginBottom: 4, width: "85%" },
  tipLine2: { height: 6, backgroundColor: "#E8E8E8", borderRadius: 3, width: "55%" },
});
