import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    employees: [],
}

const employeeSlice = createSlice ({
    name: 'employeeSlice',
    initialState,
    reducers: { 
        createEmployee: ( state, action ) => {
            state.employees = { ...state.employees, ...action.payload }
        }
    }
})

export const { createEmployee } = employeeSlice.actions
export default employeeSlice.reducer