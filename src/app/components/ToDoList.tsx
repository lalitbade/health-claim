import { useState } from "react";
import { CheckCircle, Circle, Trash2 } from "lucide-react";

const initialTasks = [
  { id: 1, text: "Review policy documents", completed: false },
  { id: 2, text: "Follow up on claim status", completed: true },
  { id: 3, text: "Schedule meeting with client", completed: false },
];

const ToDoList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg backdrop-blur-md">
      <h2 className="text-lg font-semibold mb-4">Task Manager</h2>
      <ul className="space-y-3">
        {tasks.map(task => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-2 rounded-lg transition ${
              task.completed ? "bg-green-100 dark:bg-green-900" : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            <span className={`flex items-center gap-2 ${task.completed ? "line-through text-gray-500" : ""}`}>
              <button onClick={() => toggleTask(task.id)}>
                {task.completed ? <CheckCircle size={20} className="text-green-600" /> : <Circle size={20} />}
              </button>
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)} className="text-red-500 hover:text-red-700">
              <Trash2 size={18} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
