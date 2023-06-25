import { createSlice } from '@reduxjs/toolkit';
import { localStorageUser, localStorageSignOut } from '../constants/localStorage';

const initialState = {
    account: {},
    signOut: localStorageSignOut ?? true,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action) => {
            const stringifiedSignIn = JSON.stringify(false);
            const stringifiedAccount = JSON.stringify(action.payload);
            localStorage.setItem('sign-out', stringifiedSignIn);
            localStorage.setItem('account', stringifiedAccount);
            state.account = action.payload;
            state.signOut = false;
        },
        login: (state) => {
            const stringifiedSignIn = JSON.stringify(false);

            localStorage.setItem('sign-out', stringifiedSignIn);

            state.signOut = false;
        },
        logout: (state) => {
            const stringifiedSignOut = JSON.stringify(true);
            localStorage.setItem('sign-out', stringifiedSignOut);

            state.signOut = true;
        },
        updateFromLocalStorage: (state) => {
            state.signOut = localStorageSignOut ?? true;
            state.account = localStorageUser || {};
        },
    },
});

export const { logout, login, register, updateFromLocalStorage } = userSlice.actions;

export default userSlice.reducer;
