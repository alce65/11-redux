import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "./action.types";

export const incrementCounterAction = createAction(
    actionTypes["counter@increment"].toLocaleString()
);
export const decrementCounterAction = createAction(
    actionTypes["counter@decrement"].toLocaleString()
);
export const incrementByAmountCounterAction = createAction<number>(
    actionTypes["counter@incrementByAmount"].toLocaleString()
);
