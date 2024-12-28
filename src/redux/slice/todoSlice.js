import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filter: "all",
  colorFilters: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const inputValue = action.payload;
      const newTodo = {
        name: inputValue,
        completed: false,
      };
      state.todos.push(newTodo);

      // state.todos.push({ name: action.payload, completed: false });
    },

    deleteTodo: (state, action) => {
      const index = action.payload;
      state.todos.splice(index, 1); //delete the todo from the list

      // state.todos.splice(action.payload, 1);
    },

    toggleTodo: (state, action) => {
      const index = action.payload;
      const todo = state.todos[index];
      // const todo = state.todos[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    markAllCompleted: (state) => {
      state.todos.forEach((todo) => (todo.completed = true));
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    setColor: (state, action) => {
      const { index, color } = action.payload;
      const todo = state.todos[index];
      if (todo) todo.color = color;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    toggleColorFilter: (state, action) => {
      const color = action.payload;
      if (state.colorFilters.includes(color)) {
        state.colorFilters = state.colorFilters.filter((clr) => clr !== color);
      } else {
        state.colorFilters.push(color);
      }
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  markAllCompleted,
  clearCompleted,
  setColor,
  setFilter,
  toggleColorFilter,
} = todosSlice.actions;     //for dispatch

export default todosSlice.reducer;   //for store
