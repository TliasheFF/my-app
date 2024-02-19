import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./users/users-slice";
import { roleSlice } from "./roles/roles-slice";

export const store = configureStore({
    reducer: combineSlices(userSlice, roleSlice),
})

export type StateType = ReturnType<typeof store.getState>;