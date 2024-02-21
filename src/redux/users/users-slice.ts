import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, Users } from "../../constants/users";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [...Users]
    },
    reducers: {
        addUser: (state, action: PayloadAction<User> ) => {
            state.users.push(action.payload);
        }
    },
})

export const {addUser} = userSlice.actions;