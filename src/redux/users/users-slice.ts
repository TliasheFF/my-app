import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../../constants/users";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [...Users]
    },
    reducers: {},
})