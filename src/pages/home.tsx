import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "../components/todo/add";
import { List } from "../components/todo/list";
import { iState } from "../store/store";
import * as ac from "../reducers/tasks/action.creators";
import { TaskCounter } from "../components/todo/task-counter";

import { StoreClass } from "../services/local.store.tasks";

export function HomePage() {
    const tasks = useSelector((state: iState) => state.tasks);
    const dispatch = useDispatch();

    const [tasksCompleted, setTasksCompleted] = useState(0);

    const store = useMemo(() => new StoreClass(), []);

    useEffect(() => {
        console.log("Use effect carga");
        store.getTasks().then((data) => dispatch(ac.loadTasksAction(data)));
    }, [store, dispatch]);

    useEffect(() => {
        console.log("Use efffect contador");
        setTasksCompleted(tasks.filter((task) => task.isCompleted).length);
        store.setTasks(tasks);
    }, [tasks, store]);

    // const addTask = (task: TaskModel) => {
    //     setTasks([...tasks, task]);
    // };

    // const deleteTask = (id: TaskModel["id"]) => {
    //     const updatedTasks = tasks.filter((task) => task.id !== id);
    //     setTasks(updatedTasks);
    // };

    // const toggleComplete = (id: TaskModel["id"]) => {
    //     const updatedTasks = tasks.map((task) =>
    //         task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    //     );
    //     setTasks(updatedTasks);
    // };

    return (
        <main>
            <h2>Lista de tareas</h2>
            <TaskCounter completed={tasksCompleted} />
            <Add></Add>
            <List />
        </main>
    );
}

export default HomePage;
