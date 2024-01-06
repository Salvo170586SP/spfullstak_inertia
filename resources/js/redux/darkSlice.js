import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
    name: "dark",
    initialState: {
        value: false,
    },
    reducers: {
        isDark: (state) => {
            state.value = !state.value;
        }
    }

})

export const { isDark, dark } = darkSlice.actions;

export const darkReducer = darkSlice.reducer;