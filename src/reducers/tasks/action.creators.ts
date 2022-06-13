import { createAction } from "@reduxjs/toolkit";
import { TaskModel } from "../../models/task";
import { actionTypes } from "./action.types";

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadTasksAction = createAction<Array<TaskModel>>(
    actionTypes["tasks@load"].toLocaleString()
);

export const addTaskAction = createAction<TaskModel>(
    actionTypes["tasks@add"].toLocaleString()
);

export const updateTaskAction = createAction<TaskModel>(
    actionTypes["tasks@update"].toLocaleString()
);

// export const updateTaskActionOld = (task: TaskModel): iAction => ({
//     type: actionTypes["tasks@update"],
//     payload: task,
// });

export const deleteTaskAction = createAction<TaskModel>(
    actionTypes["tasks@delete"].toLocaleString()
);

// export const deleteTaskAction = (task: TaskModel): iAction => ({
//     type: actionTypes["tasks@delete"],
//     payload: task,
// });
