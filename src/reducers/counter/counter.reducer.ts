import { createReducer } from "@reduxjs/toolkit";
import { iCounterState } from "../../store/store";

const initialState: iCounterState = {
    value: 0,
    status: "idle",
};
export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementAsync.pending, (state) => {
            state.status = "loading";
        })
        .addCase(incrementAsync.fulfilled, (state, action) => {
            state.status = "idle";
            state.value += action.payload;
        })
        .addCase(incrementAsync.rejected, (state) => {
            state.status = "failed";
        });
});
