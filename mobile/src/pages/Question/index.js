import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import CheckBox from "../../components/Checkbox";

import { sendAnswerRequest } from "../../store/modules/quiz/actions";

import api from "../../services/api";

import {
  Container,
  QuestionContainer,
  QuestionView,
  QuestionText,
  AlternativeList,
  Alternative,
  AnswerContainer,
  SendButton,
  NextButton,
  ExplanationButton,
} from "./styles";

export default function Question() {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const [question, setQuestion] = useState({});
  const [selectedAlternatives, setSelectedAlternatives] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [loading, setLoading] = useState(false);
  const quiz = useSelector((state) => state.quiz.quiz);


  function isSelected(alternative) {
    var index = selectedAlternatives.findIndex(
      (item) => item == alternative.letter
    );
    return index != -1;
  }

  function checkCorrect(alternative) {
    var index = question.correct_answers.findIndex(
      (item) => item == alternative.letter
    );
    return index != -1;
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

  async function handleAnswer() {
    dispatch(sendAnswerRequest(question._id, selectedAlternatives));
    setIsAnswered(true);
  }

  async function handleNext() {
    setIsAnswered(false);
    setLoading(true);
  }

  function handleExplanation() {
    navigation.navigate('Explanation', { rules: question.rules });
  }

  async function getQuestion() {
    let response = null;
    if (quiz.result.answeredQuantityQuestions < quiz.question_ids.length) {
      var lastUnansweredQuestion =
        quiz.question_ids[quiz.question_ids.length - 1];
      response = await api.get(`/questions/${lastUnansweredQuestion}`);
      setQuestion(response.data);
    } else {
      response = await api.get(`/quiz/${quiz._id}/next`);
      if (response.data) {
        setQuestion(response.data);
      } else {
        alert(`Acabou o jogo, seu score foi de: ${quiz.currentScore}`);
      }
    }

    navigation.setOptions({ title: `Pergunta ${response.data.number}` });
    setLoading(false);
  }

  useEffect(() => {
    if (!isAnswered) {
      getQuestion();
      setSelectedAlternatives([]);
    } else {
    }
  }, [isAnswered]);

  return (
    <Container>
      <QuestionContainer>
        <QuestionView>
          <QuestionText>{question.text}</QuestionText>
        </QuestionView>
        <AlternativeList
          data={question.alternatives}
          keyExtractor={(alternative) => String(alternative._id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: alternative }) => (
            <Alternative
              isAnswered={isAnswered}
              isCorrect={checkCorrect(alternative)}
              isSelected={isSelected(alternative)}
            >
              <CheckBox
                text={`${alternative.letter}. ${alternative.text}`}
                selected={isSelected(alternative)}
                answered={isAnswered}
                onPress={() => handleCheck(alternative)}
              />
            </Alternative>
          )}
        />
      </QuestionContainer>
      <AnswerContainer>
        {isAnswered ? (
          <>
            <ExplanationButton onPress={handleExplanation}>Explicação</ExplanationButton>
            <NextButton loading={loading} onPress={handleNext}>Próximo</NextButton>
          </>
        ) : (
          <SendButton onPress={handleAnswer}>Enviar</SendButton>
        )}
      </AnswerContainer>
    </Container>
  );
}
