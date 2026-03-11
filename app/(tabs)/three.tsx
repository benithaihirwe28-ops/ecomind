import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const questions = [
  { q: "What percentage of Earth surface is covered by oceans?", options: ["50%", "60%", "70%", "80%"], correct: 2, explanation: "Oceans cover 70% of Earth surface and produce over 50% of our oxygen." },
  { q: "How much of global CO2 emissions come from transportation?", options: ["10%", "16%", "25%", "37%"], correct: 2, explanation: "Transportation accounts for about 16-25% of global CO2 emissions." },
  { q: "Which country produces the most solar energy?", options: ["USA", "Germany", "China", "India"], correct: 2, explanation: "China is the world leader in solar energy production." },
];

export default function QuizScreen() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  function handleSelect(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.correct) setScore(s => s + 1);
  }

  function handleNext() {
    if (current + 1 >= questions.length) { setFinished(true); return; }
    setCurrent(c => c + 1);
    setSelected(null);
  }

  if (finished) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Eco Quiz</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.finishBox}>
          <Text style={styles.finishEmoji}>??</Text>
          <Text style={styles.finishTitle}>Quiz Complete!</Text>
          <Text style={styles.finishScore}>You scored {score} / {questions.length}</Text>
          <TouchableOpacity style={styles.nextBtn} onPress={() => { setCurrent(0); setSelected(null); setScore(0); setFinished(false); }}>
            <Text style={styles.nextBtnText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Eco Quiz</Text>
        <View style={styles.divider} />
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.progressRow}>
          <Text style={styles.progressText}>Question {current + 1} of {questions.length}</Text>
          <Text style={styles.scoreText}>Score: {score}</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${((current + 1) / questions.length) * 100}%` }]} />
        </View>
        <Text style={styles.questionLabel}>QUESTION {current + 1}</Text>
        <Text style={styles.questionText}>{q.q}</Text>
        {q.options.map((opt, i) => {
          let bg = "#fff";
          let borderColor = "#E0E0E0";
          if (selected !== null) {
            if (i === q.correct) { bg = "#E8F5E2"; borderColor = "#2D5A27"; }
            else if (i === selected && i !== q.correct) { bg = "#FFE8E8"; borderColor = "#CC4444"; }
          }
          return (
            <TouchableOpacity key={i} style={[styles.option, { backgroundColor: bg, borderColor }]} onPress={() => handleSelect(i)} activeOpacity={0.8}>
              <Text style={styles.optionLetter}>{String.fromCharCode(65 + i)}</Text>
              <Text style={styles.optionText}>{opt}</Text>
            </TouchableOpacity>
          );
        })}
        {selected !== null && (
          <View style={styles.explanationBox}>
            <Text style={styles.explanationTitle}>{selected === q.correct ? "Correct!" : "Not quite!"}</Text>
            <Text style={styles.explanationText}>{q.explanation}</Text>
          </View>
        )}
        {selected !== null && (
          <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
            <Text style={styles.nextBtnText}>Next Question</Text>
          </TouchableOpacity>
        )}
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
  progressRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  progressText: { fontSize: 12, color: "#666" },
  scoreText: { fontSize: 12, color: "#2D5A27", fontWeight: "700" },
  progressBar: { height: 6, backgroundColor: "#E0E0E0", borderRadius: 3, marginBottom: 20 },
  progressFill: { height: 6, backgroundColor: "#2D5A27", borderRadius: 3 },
  questionLabel: { fontSize: 11, color: "#2D5A27", fontWeight: "700", letterSpacing: 1, marginBottom: 8 },
  questionText: { fontSize: 17, fontWeight: "700", color: "#1C3D2E", marginBottom: 20, lineHeight: 24 },
  option: { flexDirection: "row", alignItems: "center", borderWidth: 1.5, borderRadius: 10, padding: 14, marginBottom: 10 },
  optionLetter: { fontSize: 13, fontWeight: "700", color: "#666", marginRight: 12, width: 20 },
  optionText: { fontSize: 14, color: "#1C3D2E", fontWeight: "500" },
  explanationBox: { backgroundColor: "#E8F5E2", borderRadius: 10, padding: 14, marginTop: 4, marginBottom: 16 },
  explanationTitle: { fontSize: 14, fontWeight: "800", color: "#2D5A27", marginBottom: 4 },
  explanationText: { fontSize: 13, color: "#3A6B3A", lineHeight: 19 },
  nextBtn: { backgroundColor: "#2D5A27", borderRadius: 12, padding: 16, alignItems: "center", marginTop: 8 },
  nextBtnText: { color: "#fff", fontSize: 15, fontWeight: "800" },
  finishBox: { flex: 1, justifyContent: "center", alignItems: "center", padding: 32 },
  finishEmoji: { fontSize: 64, marginBottom: 16 },
  finishTitle: { fontSize: 28, fontWeight: "900", color: "#1C3D2E", marginBottom: 8 },
  finishScore: { fontSize: 18, color: "#4A7C59", marginBottom: 32 },
});
