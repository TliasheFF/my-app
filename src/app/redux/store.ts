import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/users-slice";

export const store = configureStore({
    reducer: combineSlices(userSlice),
})

export type State = ReturnType<typeof store.getState>;