import PropTypes from "prop-types";
export function TaskCounter({ completed }: { completed: number }) {
    // const { tasksCompleted } = useContext(TodoContext);

    return (
        <>
            <h3>Completed tasks: {completed}</h3>
        </>
    );
}

TaskCounter.propTypes = {
    completed: PropTypes.number,
};
