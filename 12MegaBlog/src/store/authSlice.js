import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    name : null
}

const authSlice = createSlice({
    name: auth,
    initialState,
    reducers: {
        login: (state,action) => {
            state.status = true;
            state.useData = action.payload.useData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login,logout} = authSlice.actions;

export default authSlice.reducer;