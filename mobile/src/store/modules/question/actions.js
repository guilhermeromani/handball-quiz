export function setCurrentQuestion(question) {
    return {
      type: "@quiz/SET_CURRENT_QUESTION",
      payload: { question },
    };
  }
  
  export function sendAnswerRequest(question_id, answers) {
    return {
      type: "@quiz/SEND_ANSWER_REQUEST",
      payload: { question_id, answers },
    };
  }
  
  export function sendAnswerSuccess(quiz) {
    return {
      type: "@quiz/SEND_ANSWER_SUCCESS",
      payload: { quiz },
    };
  }
  
  export function clearQuiz() {
    return {
      type: "@quiz/CLEAR_QUIZ",
    };
  }
  