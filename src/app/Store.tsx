import { configureStore } from "@reduxjs/toolkit";

// TareaSlice
import  TareaSlice  from '../redux/TareaSlice'

export const store = configureStore({
  reducer: {
    tarea: TareaSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch