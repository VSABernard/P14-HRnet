import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'

/** 
 * Suspense is a React feature that allows for components to be loaded asynchronously. 
 * React.lazy is a powerful feature of React that allows components to be loaded lazily from the server. 
 */

const CreateEmployee = React.lazy(() => import('./pages/CreateEmployee/CreateEmployee'))
const CurrentEmployees = React.lazy(() => import('./pages/CurrentEmployees/CurrentEmployees'))
const Error404 = React.lazy(() => import('./pages/Error404/Error404'))

const App= () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<CreateEmployee/>} />
          <Route path="/CurrentEmployees" element={<CurrentEmployees/>} />    
          <Route path="*" element={<Error404/>} />
        </Routes>
      </Suspense>  
    </BrowserRouter>    
  )
}

export default App
