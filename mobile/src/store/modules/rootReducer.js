import { combineReducers } from "redux";

import auth from "./auth/reducer";
import quiz from "./quiz/reducer";
import question from "./question/reducer";

export default combineReducers({ auth, quiz, question });
