import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import CreateEmployee from './pages/CreateEmployee/CreateEmployee'

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
        </Routes>
    </BrowserRouter>    
  )
}

export default App
