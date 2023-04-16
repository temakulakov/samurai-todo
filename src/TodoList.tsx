import React from "react";
import {FilterKeyType} from "./App";

type TodoListPropsType = {
    title: string;
    tasks: TaskType[];
    removeTask: (arg0: number) => void;
    taskFilter: (arg0: FilterKeyType) => void;
};

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
};

const TodoList: React.FC<TodoListPropsType> = ({ title, tasks, removeTask, taskFilter}) => {

    const arrayTasks: Array<JSX.Element> = tasks.map(task  => {
        return (
            <li key={task.id}>
                <input type={"checkbox"} checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={() => removeTask(task.id)}>X</button>
            </li>
        )
    });
    return <>
        <div className={"card"}>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                { arrayTasks }
            </ul>
        </div>
        <div className={"buttons"}>
            <button onClick={() => taskFilter("All")}>All</button>
            <button onClick={() => taskFilter("Active")}>Active</button>
            <button onClick={() => taskFilter("Complete")}>Complete</button>
        </div>
    </>
};

export default TodoList;