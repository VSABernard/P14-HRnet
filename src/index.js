import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store'
//import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
//import { reducer as formReducer } from 'redux-form'
import './index.css'

// const reducer = combineReducers({
//    form: formReducer, // mounted under "form"
// })

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render (
  <React.StrictMode>    
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <App />
          </PersistGate>              
      </Provider>
  </React.StrictMode>
)


