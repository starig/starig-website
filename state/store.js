import { configureStore } from '@reduxjs/toolkit'
import languageSlice from "./language/languageSlice";

export default configureStore({
    reducer: {
        language: languageSlice
    },
})
