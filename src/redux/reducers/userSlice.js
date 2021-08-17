import { createSlice } from '@reduxjs/toolkit'
import cookie from 'react-cookies'

const userData = cookie.load('user') !== undefined ? cookie.load('user') : null

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: userData
    },
    reducers: {
        addUser: (state, action) => {
            console.log('action => ', action);
            state.user = action.payload;
        },
        updateUserName: (state, action) => {
            state.user = {
                ...state.user,
                name: action.payload.name,
            }
        },
        deleteUser: (state) => {
            state.user = null;
        },
    },
})

export const { addUser, updateUserName, deleteUser } = userSlice.actions;

export default userSlice.reducer