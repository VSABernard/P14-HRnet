import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from 'redux'
import employeeReducer from '../redux/slices/employeeSlice'
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
    form: formReducer, // mounted under "form"
    employeeReducer : employeeReducer
})

export const store = configureStore ({
    reducer: reducer,
})