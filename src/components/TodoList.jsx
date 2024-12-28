import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo, setColor } from "../redux/slice/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, colorFilters, filter } = useSelector((state) => state.todos); 


  const filteredTodosByStatus =
    filter === "all"
      ? todos
      : todos.filter((todo) =>
          filter === "active" ? !todo.completed : todo.completed
        );

  const filteredTodosByColor = colorFilters.length
    ? todos.filter((todo) => colorFilters.includes(todo.color))
    : todos;


  const filteredTodos =
    colorFilters.length > 0 ? filteredTodosByColor : filteredTodosByStatus;

  return (
    <ul className="mt-6 bg-white shadow-lg rounded-lg p-4">
      {filteredTodos.map((todo, index) => (
        <li
          key={index}
          className={`flex items-center justify-between gap-4 p-2 border-b last:border-none ${
            todo.color ? `bg-${todo.color.toLowerCase()}-100` : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(index))} // Toggle todo completion
            /> 
            <span
              className={`text-gray-700 ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.name}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <select
              className="border border-gray-300 rounded-lg p-1 focus:ring-2 focus:ring-blue-500"
              value={todo.color || ""}
              onChange={(e) =>
                dispatch(setColor({ index, color: e.target.value }))
              }
            >
              <option value="">Select Color</option>
              <option value="Purple">Purple</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
            </select>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              onClick={() => dispatch(deleteTodo(index))} // Delete todo
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
