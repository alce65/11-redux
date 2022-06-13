import { useSelector } from "react-redux";
import { iState } from "../../store/store";
import { Task } from "./task";

export function List() {
    const tasks = useSelector((state: iState) => state.tasks);

    return (
        <>
            <p>Context-list</p>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Task task={task} />
                    </li>
                ))}
            </ul>
        </>
    );
}
