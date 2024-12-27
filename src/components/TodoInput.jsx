// import React from "react";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { addTask } from "../Slice/InputSlice";
// const TodoInput = () => {
//     const[inputTask,setInputTask] = useState("");
//   const dispatch = useDispatch();

// const handleSetTask=(e)=>{
//    setInputTask(e.target.value);
// }

//   const handleAddTodo = (e) => {
//     e.preventDefault();
//     if(inputTask!==""){
//       dispatch(addTask(InputTask))
//       setInputTask("");
//     }
//     }


   
//   return (
//     <div className="flex justify-center mb-4">
//       <input 
//         type="text"
//         placeholder="Add a task"
//         className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//         onSubmit={handleSetTask}
//         onChange={handleAddTodo}
//       />
//     </div>
//   );
// };

// export default TodoInput;




import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Slice/InputSlice";

const TodoInput = () => {
  const [inputTask, setInputTask] = useState("");
  const dispatch = useDispatch();

  // Handle the input value change
  const handleSetTask = (e) => {
    setInputTask(e.target.value);
  };

  // Handle adding a new task
  const handleAddTodo = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (inputTask !== "") {
      dispatch(addTodo(inputTask)); // Use the correct Redux action
      setInputTask(""); // Clear the input field after submission
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <form onSubmit={handleAddTodo} className="w-full">
        <input
          type="text"
          value={inputTask}
          placeholder="Add a task"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleSetTask} // Update the input field
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoInput;

