import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from 'redux'
import employeeReducer from '../redux/slices/employeeSlice'
import { reducer as formReducer } from 'redux-form'

const persistConfig = {
    key: 'root',
    storage,
}
const reducer = combineReducers({
    form: formReducer, // mounted under "form"
    employeeReducer : employeeReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore ({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})

export const persistor = persistStore(store)