import { createSlice } from '@reduxjs/toolkit'

export const languageSlice = createSlice({
    name: 'counter',
    initialState: {
        locale: 'ru',
    },
    reducers: {
        setLanguage: (state, action) => {
            state.locale = action.payload;
        }
    },
})

export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer
