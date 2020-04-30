import { all, takeLatest, call, put, select } from "redux-saga/effects";

import { Alert } from "react-native";
import api from "../../../services/api";

import { setCurrentQuiz, clearQuiz, sendAnswerSuccess } from "./actions";

export function* sendAnswer({ payload }) {
  try {
    const { question_id, answers } = payload;

    let { quiz } = yield select((state) => state.quiz);

    if (!quiz) {
      Alert.alert(
        "Erro ao processar o quiz",
        "Por favor, volte a tela inicial e tente novamente."
      );
      yield put(clearQuiz());
    }

    const response = yield call(api.put, `/quiz/${quiz._id}/send`, {
      question_id,
      answers,
    });
    const newQuiz = response.data;

    yield put(sendAnswerSuccess(newQuiz));
  } catch (error) {
    console.log(error);
    Alert.alert("Erro ao processar o quiz", "Deu ruim");
    yield put(clearQuiz());
  }
}

export default all([
  takeLatest("@quiz/SET_CURRENT_QUIZ", setCurrentQuiz),
  takeLatest("@quiz/SEND_ANSWER_REQUEST", sendAnswer),
]);
