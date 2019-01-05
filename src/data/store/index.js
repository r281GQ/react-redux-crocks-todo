import { createStore } from "redux";

import applyTo from "crocks/combinators/applyTo";
import isSameType from "crocks/predicates/isSameType";
import mconcatMap from "crocks/helpers/mconcatMap";
import safe from "crocks/Maybe/safe";
import State from "crocks/State";
import First from "crocks/First";
import compose from "crocks/helpers/compose";

import todos from "./../reducers";
import { INITIAL_STATE } from "../constants";

/**
 *  runReducer :: Action -> Reducer -> Maybe State
 */
const runReducer = action =>
  compose(
    safe(isSameType(State)),
    applyTo(action)
  );

/**
 *  combineReducers :: [Reducer] -> Action -> State
 */
const combineReducers = reducers => action =>
  mconcatMap(First, runReducer(action), reducers).option(State.of(action));

export default createStore(
  (prevState, action) => combineReducers([todos])(action).execWith(prevState),
  INITIAL_STATE
);
