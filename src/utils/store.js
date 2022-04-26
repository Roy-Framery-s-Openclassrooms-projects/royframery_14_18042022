import { configureStore } from '@reduxjs/toolkit'

// Reducers
import employeeReducer from '../features/employee'
import modalReducer from '../features/modal'

export default configureStore({
    reducer: {
        employee: employeeReducer,
        modal: modalReducer,
    },
})
