import React, { useState, useEffect } from "react";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { Button, Text, View, FlatList, TouchableOpacity } from "react-native";
import CheckBox from "../../components/Checkbox";

import api from "../../services/api";

import {
  Container,
  QuestionView,
  QuestionText,
  AlternativeList,
  Alternative,
  AnswerBox,
  Answer,
  AnswerText,
} from "./styles";

export default function Question() {
  const route = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [question, setQuestion] = useState({});
  const [selectedAlternatives, setSelectedAlternatives] = useState([]);
  const [quiz, setQuiz] = useState(route.params.currentQuiz);

  // BackHandler.addEventListener('hardwareBackPress', function() {return true})

  async function handleAnswer() {
    const response = await api.put(`/quiz/${quiz._id}/send`, {
      question_id: question._id,
      answers: selectedAlternatives,
    });

    navigation.navigate("Answer", {
      question: question,
      quiz: response.data,
      selectedAlternatives: selectedAlternatives,
    });
  }

  function handleCheck(alternative) {
    var index = selectedAlternatives.findIndex(
      (item) => item == alternative.letter
    );
    if (index == -1) {
      setSelectedAlternatives([...selectedAlternatives, alternative.letter]);
    } else {
      var array = [...selectedAlternatives];
      array.splice(index, 1);
      setSelectedAlternatives(array);
    }
  }

  function isSelected(alternative) {
    var index = selectedAlternatives.findIndex(
      (item) => item == alternative.letter
    );
    return index != -1;
  }

  async function getQuestion() {
    let response = null;
    if (quiz.result.answeredQuantityQuestions < quiz.question_ids.length) {
      var lastUnansweredQuestion =
        quiz.question_ids[quiz.question_ids.length - 1];
      response = await api.get(`/questions/${lastUnansweredQuestion}`);
      setSelectedAlternatives([]);
      setQuestion(response.data);
    } else {
      response = await api.get(`/quiz/${quiz._id}/next`);
      setSelectedAlternatives([]);
      if (response.data) {
        setQuestion(response.data);
      } else {
        alert(`Acabou o jogo, seu score foi de: ${quiz.currentScore}`);
      }
    }

    navigation.setOptions({ title: `Pergunta ${response.data.number}` });
  }

  useEffect(() => {
    getQuestion();
  }, [isFocused]);

  return (
    <Container>
      <QuestionView>
        <QuestionText>{question.text}</QuestionText>
      </QuestionView>
      <AlternativeList
        data={question.alternatives}
        keyExtractor={(alternative) => String(alternative._id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: alternative }) => (
          <Alternative>
            <CheckBox
              text={`${alternative.letter}. ${alternative.text}`}
              selected={isSelected(alternative)}
              onPress={() => handleCheck(alternative)}
            />
          </Alternative>
        )}
      />
      <AnswerBox>
        <Answer onPress={handleAnswer}>
          <AnswerText>Enviar</AnswerText>
        </Answer>
      </AnswerBox>
    </Container>
  );
}
