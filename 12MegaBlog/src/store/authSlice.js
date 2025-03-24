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
        }
    }
})

export default authSlice.reducer;