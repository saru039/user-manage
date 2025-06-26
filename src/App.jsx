import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Login from './Pages/Login'
import Users from './Pages/Users'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/logout' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App