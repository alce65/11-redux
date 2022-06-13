import { configureStore } from "@reduxjs/toolkit";
import { TaskModel } from "../models/task";
import { counterReducer } from "../reducers/counter/counter.reducer";
import { taskReducer } from "../reducers/tasks/task.reducer";
// import { createStore} from "redux";

export interface iCounterState {
    value: number;
    status: "idle" | "loading" | "failed";
}
export interface iState {
    tasks: Array<TaskModel>;
    counter: iCounterState;
}

const preloadedState = {
    tasks: [],
    counter: {
        value: 0,
        status: "idle",
    },
};

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        counter: counterReducer,
    },
    preloadedState,
});
