import React, { useState } from "react";
import './todolist.css'

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); 
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        placeholder="Añadir una tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <ul>
        {tasks.length === 0 ? (
          <li>No hay tareas, añadir tareas</li>
        ) : (
          tasks.map((t, index) => (
            <li key={index} className="task-item">
              {t}
              <span
                className="delete-icon"
                onClick={() => deleteTask(index)}
              >
                ❌
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoApp;
