import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroContatosState = {
  id: number
}

const initialState: FiltroContatosState = {
  id: -1
}

const filtroContatosSlice = createSlice({
  name: 'filtroContatos',
  initialState,
  reducers: {
    alteraId: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    }
  }
})

export const { alteraId } = filtroContatosSlice.actions
export default filtroContatosSlice.reducer
