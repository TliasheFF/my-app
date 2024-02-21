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
        }
    },
})

export const {addUser} = userSlice.actions;