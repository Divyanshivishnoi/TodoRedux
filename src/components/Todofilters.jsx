import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, toggleColorFilter } from "../redux/slice/todoSlice";

const TodoFilters = () => {
  const dispatch = useDispatch();
  const { filter, colorFilters } = useSelector((state) => state.todos);
  const todos = useSelector((state) => state.todos.todos);
  const remainingTodos=()=>{
    if(filter==="all"){
      return todos.length
    }
    if(filter==="active"){
      return todos.filter((todo)=>!todo.completed).length
    }
    if(filter==="completed"){
      return todos.filter((todo)=>todo.completed).length
    }

  }

  console.log("Current color filters:", colorFilters);

  return (
    <div className="flex flex-col items-center gap-6 mt-6">
   
      <div className="flex space-x-4">
        {["all", "active", "completed"].map((filterStatus) => (
          <button
            key={filterStatus}
            className={`px-6 py-2 rounded-lg transition duration-200 focus:outline-none focus:ring-2 ${
              filter === filterStatus
                ? "bg-blue-500 text-white"     
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => dispatch(setFilter(filterStatus))}
          >
            
            {filterStatus.charAt(0).toUpperCase() + filterStatus.slice(1)}
          </button>
        ))}
      </div>

     
      <h2 className="text-lg text-gray-700">Filters by Colors</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {["Purple", "Red", "Green", "Blue"].map((color) => (
          <div key={color} className="flex items-center space-x-2">
          
            <input
              type="checkbox"
              checked={colorFilters.includes(color)} 
              className={`h-4 w-4 text-${color.toLowerCase()}-600 focus:ring-2 focus:ring-${color.toLowerCase()}-500`}
              onChange={() => {
                console.log(`Toggling color filter for ${color}`); 
                dispatch(toggleColorFilter(color)); 
              }}
            />
            <label className={`text-${color.toLowerCase()}-800`}>{color}</label>
            
          </div>
          
        ))}
        
      </div>
      <div>
          <p>ramaining todos:{remainingTodos()}</p>
            
        </div>
    </div>
  );
};

export default TodoFilters;
