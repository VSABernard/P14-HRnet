import React from 'react'
import { BrowserRouter, Routes} from 'react-router-dom'

// import Homepage from './pages/Homepage/Homepage'

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
          {/* <Route path="/" element={<Homepage/>} />          */}
        </Routes>
    </BrowserRouter>    
  )
}

export default App
