import React, { useState, useEffect } from "react";
import {
  useNavigation,
  useNavigationState,
  useIsFocused,
} from "@react-navigation/native";
import { FlatList } from "react-native";
import QuizCard from "../../components/QuizCard";

import api from "../../services/api";
import { Container, NewQuizButton } from "./styles";

export default function OngoingQuiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [page, setPage] = useState(1);
  const [quizInfo, setQuizInfo] = useState({ pages: 0, total: 0 });
  const [loading, setLoading] = useState(false);

  let isFocused = useIsFocused();
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
    if (isFocused) {
      loadQuizzes();
    }
  }, [isFocused]);

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
    <Container>
      <NewQuizButton
        icon="add-circle-outline"
        onPress={() => navigation.navigate("Categories")}
      >
        Novo
      </NewQuizButton>

      <FlatList
        data={quizzes}
        style={{ marginTop: 10 }}
        keyExtractor={(quiz) => String(quiz._id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadQuizzes}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => renderQuiz(item)}
      />
    </Container>
  );
}

// OngoingQuiz.navigationOptions = {
//   tabBarLabel: 'Agendamentos',
//   tabBarIcon: ({ tintColor }) => (
//     <Icon name="event" size />
//   )
// }
