import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/LogIn'
import SignUp from './components/SignUp'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>  
          <Route index path='/' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
