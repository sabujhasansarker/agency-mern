import { combineReducers } from "redux";

import service from "./service";
import order from "./order";
import review from "./review";
import auth from "./auth";

export default combineReducers({ service, order, auth, review });
