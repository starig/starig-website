import { createSlice } from '@reduxjs/toolkit'

export const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        toastShowed: false,
    },
    reducers: {
        setToastShowed: (state, action) => {
            state.toastShowed = true;
        }
    },
})

export const { setToastShowed } = toastSlice.actions

export default toastSlice.reducer
