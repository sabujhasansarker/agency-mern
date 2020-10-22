import { combineReducers } from "redux";

import service from "./service";
import order from "./order";
import admin from "./admin";

export default combineReducers({ service, order, admin });
