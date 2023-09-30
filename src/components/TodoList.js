import React, { useState } from 'react';
import './todo.css';

function TodoList() {
 // State to manage the list of tasks
 const [tasks, setTasks] = useState([]);
 // State to manage the input field for adding new tasks
 const [taskInput, setTaskInput] = useState('');

 // Function to add a new task to the list
 const addTask = () => {
   if (taskInput.trim() === '') {
     return; // Don't add empty tasks
   }
   const newTask = {
     id: Date.now(),
     text: taskInput,
     completed: false,
   };
   setTasks([...tasks, newTask]);
   setTaskInput('');
 };

 // Function to mark a task as completed
 const toggleTaskCompletion = (taskId) => {
   const updatedTasks = tasks.map((task) =>
     task.id === taskId ? { ...task, completed: !task.completed } : task
   );
   setTasks(updatedTasks);
 };

 // Function to remove a task from the list
 const removeTask = (taskId) => {
   const updatedTasks = tasks.filter((task) => task.id !== taskId);
   setTasks(updatedTasks);
 };

  return (
    <div className="todo-app">
    <h1>Todo List</h1>
    <div className="add-task">
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
    </div>
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span className={task.completed ? 'completed' : ''}>{task.text}</span>
          <button onClick={() => removeTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default TodoList;
