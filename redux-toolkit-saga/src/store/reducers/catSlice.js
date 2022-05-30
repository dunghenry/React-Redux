import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cats: [],
    isLoading: false,
    isError: false,
}
const catSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        getCatsFetch: (state) => {
            state.isLoading = true;
        },
        getCatsSuccess: (state, action) => {
            state.cats = action.payload
            state.isLoading = false;
        },
        getCatsFailure: (state) => {
            state.isError = true;
        }
    }
})

export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catSlice.actions;

const catReducer = catSlice.reducer;

export default catReducer;