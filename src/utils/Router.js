import React from 'react'
import {Routes, Route}  from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import TodoList from '../components/TodoList'
import Home from '../components/Home'
import Logout from '../components/Logout'

const Router = () => {
  return (
    <div>

      <Home />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/todolist' element={<TodoList />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </div>
  )
}

export default Router
