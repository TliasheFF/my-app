import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, users } from "../../constants/users";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [...users]
    },
    reducers: {
        addUser: (state, action: PayloadAction<User> ) => {
            state.users.push(action.payload);
        },

        updateUser: (state, action: PayloadAction<User>) => {
            state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user)
        },

        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    },
})

export const { addUser, updateUser, deleteUser } = userSlice.actions;