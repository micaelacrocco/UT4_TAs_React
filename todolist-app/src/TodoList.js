import React, {useState} from 'react';
import './TodoList.css';

function TodoList() {
    const [task, setTask] = useState(''); 
    const [tasks, setTasks] = useState([]); 

    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]); 
            setTask(''); 
        }
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index); 
        setTasks(newTasks);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Escribe una tarea"
            />
            <button onClick={handleAddTask}>Agregar Tarea</button>
            <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                {task}
                <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
                </li>
            ))}
                </ul>
        </div>
    );
    }

export default TodoList;