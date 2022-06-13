// Funcion pura
// recibe un estado y una accion
// retorna un NUEVO estado (NO HAY MUTACION)

import { createReducer } from "@reduxjs/toolkit";
import { TaskModel } from "../../models/task";
import * as ac from "./action.creators";

const initialState: Array<TaskModel> = [];
export const taskReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadTasksAction, (state, action) => [...action.payload])
        .addCase(ac.addTaskAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(ac.updateTaskAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(ac.deleteTaskAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )
        .addDefaultCase((state) => state);
});

// export function taskReducer(
//     initialState: Array<TaskModel>,
//     action: iAction
// ): Array<TaskModel> {
//     let state: Array<TaskModel> = [];
//     switch (action.type) {
//         case actionTypes["tasks@load"]:
//             state = action.payload;
//             break;
//         case actionTypes["tasks@add"]:
//             state = [...initialState, action.payload];
//             break;
//         case actionTypes["tasks@update"]:
//             state = initialState.map((item) =>
//                 item.id === action.payload.id ? action.payload : item
//             );
//             break;
//         case actionTypes["tasks@delete"]:
//             state = initialState.filter(
//                 (item) => item.id !== action.payload.id
//             );
//             break;
//         default:
//             state = initialState;
//     }

//     return state;
// }
