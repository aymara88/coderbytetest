import React from 'react';
import './App.css';
import TodoList from './tests/TodoList';
import ThemeProvider from './tests/ThemeProvider';
import RegistrationForm from './tests/RegistrationForm';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <TodoList />
        <RegistrationForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
