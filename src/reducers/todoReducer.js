const initialState = {
  todoList: [],
  newTodo: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        todoList: action.payload
      };
    default:
      return state;
  }
};
