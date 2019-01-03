import { TOGGLE } from "./../constants";

const handleToggle = (prevState, action) => {
  const idx = prevState.todos.findIndex(item => item.id === action.payload.id);

  const cp = [...prevState.todos];

  cp[idx].completed = !cp[idx].completed;

  return { ...prevState, todos: cp };
};

export const todos = (prevState, action) => {
  switch (action.type) {
    case TOGGLE:
      return handleToggle(prevState, action);

    default:
      return prevState;
  }
};
