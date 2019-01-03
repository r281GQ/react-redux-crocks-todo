import { createStore } from "redux";

import { INITIAL_STATE } from "./../constants";
import reducer from "./../reducers";

export default createStore(reducer, INITIAL_STATE);
