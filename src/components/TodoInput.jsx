import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/todoSlice';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
console.log("input value",inputValue);
  const handleAddTodo = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      dispatch(addTodo(inputValue.trim())); 
      setInputValue(''); 
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Add a task"
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTodo}
      />
    </div>
  );
};

export default TodoInput;

