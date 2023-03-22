import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import CreateEmployee from './pages/CreateEmployee/CreateEmployee'
import CurrentEmployees from './pages/CurrentEmployees/CurrentEmployees'
import Error404 from './pages/Error404/Error404'

import './App.css'

/** 
 * @file App.js is the root file for this app. <br>
 * * @author Veronica BERNARD
 * @see <a href="https://github.com/VSABernard">My GitHub</a>
 */

const App= () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateEmployee/>} />
          <Route path="/CurrentEmployees" element={<CurrentEmployees/>} />    
          <Route path="*" element={<Error404/>} />
        </Routes>
    </BrowserRouter>    
  )
}

export default App
