import State from "crocks/State";

import { TOGGLE } from "./../constants";

/**
 *  todos :: Action -> State
 */
export const todos = action => {
  switch (action.type) {
    case TOGGLE:
      return State.of(null);

    default:
      return State.of(null);
  }
};
