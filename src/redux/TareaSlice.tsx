import {createSlice} from '@reduxjs/toolkit';


interface Data {
  name?: string;
  id: string;
}


const initialState: Data[] = []


const TareaSlice = createSlice({
  name: 'tarea',
  initialState: initialState,
  reducers: {
    agregarTarea: (state, action) => {
      state.push(action.payload);
    },
    eliminarTarea: (state, action) => {
      const deleteTask = state.find((item) => item.id === action.payload )
      if(deleteTask) {
        state.splice(state.indexOf(deleteTask), 1);
      }
    }
  }
})

export const {agregarTarea, eliminarTarea} = TareaSlice.actions

export default TareaSlice.reducer