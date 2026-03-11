import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const videos = [
  { title: "Our Planet is Changing Fast", category: "Climate", duration: "12 min", color: "#2D5A27" },
  { title: "The Ocean Plastic Crisis", category: "Oceans", duration: "8 min", color: "#1A4A6E" },
  { title: "The Solar Revolution", category: "Energy", duration: "10 min", color: "#8B3A1A" },
];

export default function VideosScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>?? Watch and Learn</Text>
        <View style={styles.divider} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {videos.map((v, i) => (
          <View key={i} style={styles.card}>
            <TouchableOpacity style={[styles.thumbnail, { backgroundColor: v.color }]} activeOpacity={0.8}>
              <View style={styles.playBtn}>
                <Text style={styles.playIcon}>?</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{v.title}</Text>
              <View style={styles.tagRow}>
                <View style={styles.tag}><Text style={styles.tagText}>{v.category}</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>{v.duration}</Text></View>
              </View>
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
  card: { backgroundColor: "#fff", borderRadius: 14, marginBottom: 20, elevation: 3, overflow: "hidden" },
  thumbnail: { height: 160, justifyContent: "center", alignItems: "center" },
  playBtn: { width: 56, height: 56, borderRadius: 28, backgroundColor: "rgba(255,255,255,0.25)", justifyContent: "center", alignItems: "center", borderWidth: 2, borderColor: "#fff" },
  playIcon: { color: "#fff", fontSize: 22, marginLeft: 4 },
  cardBody: { padding: 14 },
  cardTitle: { fontSize: 15, fontWeight: "700", color: "#1C3D2E", marginBottom: 8 },
  tagRow: { flexDirection: "row" },
  tag: { backgroundColor: "#E8F5E2", borderRadius: 6, paddingHorizontal: 10, paddingVertical: 3, marginRight: 8 },
  tagText: { fontSize: 11, color: "#2D5A27", fontWeight: "600" },
});
