import { TOGGLE } from "./../constants";

export const toggle = todo => {
  return {
    type: TOGGLE,
    payload: {
      id: todo.id
    }
  };
};
