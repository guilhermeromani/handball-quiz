import { combineReducers } from "redux";

import auth from "./auth/reducer";
import user from "./user/reducer";
import quiz from "./quiz/reducer";

export default combineReducers({ auth, user, quiz });
