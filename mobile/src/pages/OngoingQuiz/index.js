import React, { useState, useEffect } from "react";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { TouchableOpacity, Text, View, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import QuizCard from "../../components/QuizCard";

import api from "../../services/api";
import styles from "./styles";

export default function OngoingQuiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [page, setPage] = useState(1);
  const [quizInfo, setQuizInfo] = useState({ pages: 0, total: 0 });
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function loadQuizzes() {
    if (loading) return;
    if (page == quizInfo.pages) return;

    setLoading(true);

    const response = await api.get("quiz", { params: { page } });
    const { docs, ...infos } = response.data;

    setQuizzes([...quizzes, ...docs]);
    setQuizInfo(infos);

    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadQuizzes();
  }, []);

  function renderQuiz(quiz) {
    const {
      currentScore,
      answeredQuantityQuestions,
      maxQuestions,
    } = quiz.result;

    return (
      <QuizCard
        currentQuiz={quiz}
        currentScore={currentScore}
        answeredQuestions={answeredQuantityQuestions}
        totalQuestions={maxQuestions}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.newQuizButton}
        onPress={() => navigation.navigate("Categories")}
      >
        <Feather size={25} color="#FFF" name="plus-circle" />
        <Text style={styles.newQuizButtonText}>Novo</Text>
      </TouchableOpacity>

      <FlatList
        data={quizzes}
        style={{ marginTop: 10 }}
        keyExtractor={(quiz) => String(quiz._id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadQuizzes}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => renderQuiz(item)}
      />
    </View>
  );
}
