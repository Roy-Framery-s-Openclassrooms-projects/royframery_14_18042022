import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showModal: false,
}

// Slice
const { actions, reducer } = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        showModal: (draft) => {
            draft.showModal = !draft.showModal
            return
        },
    },
})

export const showModal = actions.showModal

export default reducer
