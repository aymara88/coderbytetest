import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const { theme, toggleTheme } = useTheme()

  const addTask = () => {
    const updatedTasks = [...tasks, { id: tasks.length, text: newTask, completed: false }];
    setTasks(updatedTasks);
    setNewTask('');
  };

  const toggleTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  return (
    <div style={{
      padding: "20px",
      background: theme === "light" ? "#fff" : "#121212",
      color: theme === "light" ? "#000" : "#fff",
      minHeight: "200px",
    }}>
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>

      <button onClick={toggleTheme}>
        Cambiar a {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
      </button>
    </div>
  );
};

export default TodoList;