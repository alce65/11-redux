import { TaskModel } from "../../models/task";
import { useDispatch } from "react-redux";
import * as ac from "../../reducers/tasks/action.creators";

export function Task({ task }: { task: TaskModel }) {
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(ac.updateTaskAction(task));
        // toggleComplete(task.id);
    };

    const handleClick = () => {
        // deleteTask(task.id);
        dispatch(ac.deleteTaskAction(task));
    };

    return (
        <>
            <h3>{task.title}</h3>
            <p>{task.responsible}</p>
            <label htmlFor="completed">Completed</label>
            <input
                checked={task.isCompleted}
                type="checkbox"
                name="isCompleted"
                id="completed"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Delete</button>
        </>
    );
}
