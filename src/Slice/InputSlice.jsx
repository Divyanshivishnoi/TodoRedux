
// import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//     todos:[{title: 'Learn React', completed: false}],
// }

//  export const InputSlice=createSlice({
//     name:'todo',
//     initialState,
//     reducers:{
//         addTodo:(state,action)=>{
//     const todo={
//        title:action.payload,
//          completed:false, 
//     }
//     state.todos.push(todo)
// }
// },
// })


// export const {addTodo} = InputSlice.actions;
// export default InputSlice.reducer;






import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ title: "Learn React", completed: false }],
};

export const InputSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        title: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
  },
});

export const { addTodo } = InputSlice.actions; // Ensure correct export of 'addTodo'
export default InputSlice.reducer;




