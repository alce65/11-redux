import { configureStore } from "@reduxjs/toolkit";
import { ReducerWithInitialState } from "@reduxjs/toolkit/dist/createReducer";
import { TaskModel } from "../models/task";
import { taskReducer } from "../reducers/tasks/task.reducer";
// import { createStore} from "redux";

export interface iState {
    tasks: Array<TaskModel>;
}

const preloadedState = {
    tasks: [],
};

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
    preloadedState,
});
