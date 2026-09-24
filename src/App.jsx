import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Task Manager</h1>
        <p className="subtitle">React CI/CD Practice Project</p>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
          />

          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty">No tasks added yet.</p>
          ) : (
            tasks.map((item) => (
              <div className="task" key={item.id}>
                <span
                  className={item.completed ? "completed" : ""}
                  onClick={() => toggleTask(item.id)}
                >
                  {item.text}
                </span>

                <button onClick={() => deleteTask(item.id)}>
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        <div className="footer">
          Total Tasks: {tasks.length}
        </div>
      </div>
    </div>
  );
}

export default App;