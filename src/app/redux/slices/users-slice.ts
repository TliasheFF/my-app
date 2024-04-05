import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { users } from "../../../shared/mocks/users";
import { User } from "../../../shared/types/users-type";
import { State } from "../store";

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

// selectors
export const selectUsers = (state: State) => state.user.users;
export const selectUserById = (state: State, id: string) => selectUsers(state).find((user) => user.id === id);