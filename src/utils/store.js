import { configureStore } from '@reduxjs/toolkit'

// Reducers
import employeeReducer from '../features/employee'

export default configureStore({
    reducer: {
        employee: employeeReducer,
    },
})
