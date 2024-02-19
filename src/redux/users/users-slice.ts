import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../../constants/users";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [...Users]
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        }
    },
})

export const {addUser} = userSlice.actions;