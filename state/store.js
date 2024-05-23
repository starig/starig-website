import { configureStore } from '@reduxjs/toolkit'
import languageSlice from "./language/languageSlice";
import toastSlice from "./toast/toastSlice";

export default configureStore({
    reducer: {
        language: languageSlice,
        toast: toastSlice,
    },
})
