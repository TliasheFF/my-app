import { createSlice } from "@reduxjs/toolkit";
import { Roles } from "../../constants/roles";

export const roleSlice = createSlice({
    name: 'role',
    initialState: {
        roles: [...Roles]
    },
    reducers: {},
})