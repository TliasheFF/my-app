import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./users/users-slice";

export const store = configureStore({
    reducer: combineSlices(userSlice),
})

export type StateType = ReturnType<typeof store.getState>;