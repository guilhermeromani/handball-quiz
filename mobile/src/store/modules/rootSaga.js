import { all } from "redux-saga/effects";
import auth from "./auth/sagas";
import user from "./user/sagas";
import quiz from "./quiz/sagas";
import question from "./question/sagas";

export default function* rootSaga() {
  return yield all([auth, user, quiz, question]);
}
