import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    account: {},
    signOut: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            const stringifiedSignIn = JSON.stringify(false);
            localStorage.setItem('sign-out', stringifiedSignIn);
            state.signOut = false;
        },
        logout: (state) => {
            const stringifiedSignOut = JSON.stringify(true);
            localStorage.setItem('sign-out', stringifiedSignOut);
            state.signOut = true;
        },
    },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
