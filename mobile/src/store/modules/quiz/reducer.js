import produce from "immer";

const INITIAL_STATE = {
  quiz: {},
  loading: false,
};

export default function quiz(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@quiz/SET_CURRENT_QUIZ": {
        draft.quiz = action.payload.quiz;
        break;
      }
      case "@quiz/SEND_ANSWER_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@quiz/SEND_ANSWER_SUCCESS": {
        draft.quiz = action.payload.quiz;
        draft.loading = false;
        break;
      }
      case "@quiz/CLEAR_QUIZ": {
        draft.quiz = {};
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
