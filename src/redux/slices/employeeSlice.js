import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    employees: [],
}

const employeeSlice = createSlice ({
    name: 'employeeSlice',
    initialState,
    reducers: { 
        createEmployee: ( state, action ) => {
            console.log('action create employee receive : ' + action.payload)
            //state.employees = { ...state.employees, ...action.payload }
            state.employees.push(action.payload)
        }
    }
})

export const { createEmployee } = employeeSlice.actions
export default employeeSlice.reducer