import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

function App() {
    const todoListTitle: string = "todoListTitle 0";

    const [tasks, setTasks] = useState( [
        {id: 0, title: "Title 0", isDone: false},
        {id: 1, title: "Title 1", isDone: false},
        {id: 2, title: "Title 2", isDone: true},
        {id: 3, title: "Title 3", isDone: false},
        {id: 4, title: "Title 3", isDone: false},
        {id: 5, title: "Title 3", isDone: false},
    ]);

    const removeTask = (deleteTaskId: number) => {
        setTasks(tasks.filter(task => task.id !== deleteTaskId));
    }
  return (
    <div className="App">
      <TodoList title={todoListTitle} tasks={tasks} removeTask={removeTask}/>
      <div className={"buttons"}>
        <button>All</button>
        <button>Active</button>
        <button>Complete</button>
      </div>
    </div>
  );
}

export default App;
