import React from 'react';
import { useDispatch } from 'react-redux';
import { markAllCompleted, clearCompleted } from '../redux/slice/todoSlice';

const TodoActions = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 mt-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
        onClick={() => dispatch(clearCompleted())}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoActions;
