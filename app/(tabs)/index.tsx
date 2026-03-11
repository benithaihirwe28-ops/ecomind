import { View, Text, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const issues = [
  { icon: "C", title: "Climate Change", color: "#F4A261", iconColor: "#8B3A00" },
  { icon: "D", title: "Deforestation", color: "#A8D5A2", iconColor: "#2D5A27" },
  { icon: "O", title: "Ocean Pollution", color: "#A8C8E8", iconColor: "#1A4A6E" },
  { icon: "R", title: "Renewable Energy", color: "#F0E080", iconColor: "#8B6A00" },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1C3D2E" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.badge}>SUSTAINABILITY APP</Text>
          <Text style={styles.title}>EcoMind</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>8B+</Text>
            <Text style={styles.statLabel}>World Population</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>1.5C</Text>
            <Text style={styles.statLabel}>Climate Target</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>17</Text>
            <Text style={styles.statLabel}>UN SDGs</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Issues</Text>
          {issues.map((issue, i) => (
            <View key={i} style={styles.issueCard}>
              <View style={[styles.issueIcon, { backgroundColor: issue.color }]}>
                <Text style={[styles.issueInitial, { color: issue.iconColor }]}>{issue.icon}</Text>
              </View>
              <View style={styles.issueContent}>
                <Text style={styles.issueName}>{issue.title}</Text>
                <View style={styles.issueLine} />
                <View style={styles.issueLine2} />
                <TouchableOpacity style={styles.learnBtn}>
                  <Text style={styles.learnBtnText}>Learn More</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F0" },
  header: { backgroundColor: "#1C3D2E", paddingHorizontal: 20, paddingTop: 16, paddingBottom: 20 },
  badge: { color: "#A8D5A2", fontSize: 11, fontWeight: "600", letterSpacing: 1, marginBottom: 4 },
  title: { color: "#FFFFFF", fontSize: 36, fontWeight: "900", marginBottom: 12 },
  divider: { height: 3, width: 60, backgroundColor: "#4A7C59", borderRadius: 2 },
  statsRow: { flexDirection: "row", backgroundColor: "#2D5A27", paddingVertical: 16, paddingHorizontal: 20, marginBottom: 20 },
  statItem: { flex: 1, alignItems: "center" },
  statValue: { color: "#fff", fontSize: 20, fontWeight: "800" },
  statLabel: { color: "#A8D5A2", fontSize: 10, marginTop: 2, textAlign: "center" },
  statDivider: { width: 1, backgroundColor: "rgba(255,255,255,0.2)" },
  section: { paddingHorizontal: 16, paddingBottom: 20 },
  sectionTitle: { fontSize: 17, fontWeight: "800", color: "#1C3D2E", marginBottom: 14 },
  issueCard: { flexDirection: "row", backgroundColor: "#fff", borderRadius: 12, padding: 14, marginBottom: 12, alignItems: "flex-start", elevation: 2 },
  issueIcon: { width: 44, height: 44, borderRadius: 22, justifyContent: "center", alignItems: "center", marginRight: 12 },
  issueInitial: { fontSize: 18, fontWeight: "900" },
  issueContent: { flex: 1 },
  issueName: { fontSize: 15, fontWeight: "700", color: "#1C3D2E", marginBottom: 6 },
  issueLine: { height: 6, backgroundColor: "#E8E8E8", borderRadius: 3, marginBottom: 4, width: "90%" },
  issueLine2: { height: 6, backgroundColor: "#E8E8E8", borderRadius: 3, marginBottom: 8, width: "60%" },
  learnBtn: { alignSelf: "flex-start", borderWidth: 1, borderColor: "#2D5A27", borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 },
  learnBtnText: { fontSize: 11, color: "#2D5A27", fontWeight: "600" },
});
