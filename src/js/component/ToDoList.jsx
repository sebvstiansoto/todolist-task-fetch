import React, { useState, useEffect } from 'react';
import './TodoList.css'; // Asegúrate de importar el CSS

const TodoList = () => {
  const [todos, setTodos] = useState([]); // Estado para las tareas
  const [newTask, setNewTask] = useState(''); // Estado para la nueva tarea
  const [error, setError] = useState(''); // Estado para errores
  const userName = 'sebvstiansoto'; // Cambia esto según sea necesario
  const API_URL = `https://playground.4geeks.com/todo/users/${userName}`; // URL de la API

  // Obtener tareas del servidor cuando el componente se monta
  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las tareas');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setTodos(data);
        } else {
          console.error("La respuesta de la API no es un array");
        }
      })
      .catch(error => {
        console.error("Error al obtener las tareas:", error);
        setError('No se pudieron cargar las tareas. Inténtalo de nuevo más tarde.');
      });
  }, []);

  const addTask = () => {
    if (newTask.trim() === '') return;

    const taskData = { label: newTask, is_done: false };

    fetch('https://playground.4geeks.com/todo/todos/sebvstiansoto', {
      method: 'POST',
      body: JSON.stringify(taskData),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al agregar la tarea');
      }
      return response.json();
    })
    .then(data => {
      setTodos([...todos, data]); // Usar la tarea creada
      setNewTask('');
      setError(''); // Limpiar el error
    })
    .catch(error => {
      console.error("Error al agregar la tarea:", error);
      setError('No se pudo agregar la tarea. Verifica el servidor.');
    });
  };

  // Función para eliminar una tarea
  const deleteTask = (taskId) => {
    fetch(`https://playground.4geeks.com/todo/todos/${taskId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al eliminar la tarea');
      }
      // No necesitas analizar la respuesta
      setTodos(todos.filter((task) => task.id !== taskId)); // Usar el ID
    })
    .catch(error => {
      console.error("Error al eliminar la tarea:", error);
      setError('No se pudo eliminar la tarea. Verifica el servidor.');
    });
  };


  // Función para eliminar todas las tareas
  const clearAllTasks = () => {
    setTodos([]); // Limpiar el estado local antes de hacer la llamada
    fetch(API_URL, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al eliminar todas las tareas');
      }
    })
    .catch(error => {
      console.error("Error al eliminar todas las tareas:", error);
      setError('No se pudieron eliminar todas las tareas. Verifica el servidor.');
    });
  };

  return (
    <div className="todo-container">
      <h1>Lista de Tareas</h1>

      {error && <p className="error-message">{error}</p>} {/* Mensaje de error */}

      <input
        type="text"
        placeholder="Añadir una nueva tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Agregar Tarea</button>

      <ul>
        {todos.map((task) => (
          <li key={task.id}>
            {task.label}
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button onClick={clearAllTasks}>Eliminar todas las tareas</button>
      )}
    </div>
  );
};

export default TodoList;
