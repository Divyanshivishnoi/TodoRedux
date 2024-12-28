import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TodoInput from './components/TodoInput';
import TodoActions from './components/TodoActions';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList'; 

function App() {
  return (
    <Provider store={store}>
      <div className="p-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Todo App
        </h1>
        <TodoInput />
        <TodoList />
        <TodoActions />
        <TodoFilters />
      
      </div>
    </Provider>
  );
}

export default App;
