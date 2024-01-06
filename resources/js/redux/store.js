import { configureStore } from '@reduxjs/toolkit'
import { darkReducer } from './darkSlice'

export default configureStore({
  reducer: {
    dark: darkReducer,
  },
})