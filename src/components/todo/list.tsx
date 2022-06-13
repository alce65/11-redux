import { useSelector, useDispatch } from "react-redux";
import { iTaskModel } from "../../models/task";
import * as ac from "../../reducers/tasks/action.creators";
import { iState } from "../../store/store";
import { Task } from "./task";

export function List() {
    const tasks = useSelector((state: iState) => state.tasks);
    const dispatch = useDispatch();

    const deleteTask = (task: iTaskModel) =>
        dispatch(ac.deleteTaskAction(task));
    const toggleComplete = (task: iTaskModel) =>
        dispatch(ac.updateTaskAction(task));

    return (
        <>
            <p>Context-list</p>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Task
                            deleteTask={deleteTask}
                            toggleComplete={toggleComplete}
                            task={task}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}
