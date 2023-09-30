import React from 'react'
import {Routes, Route}  from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import TodoList from '../components/TodoList'
import Home from '../components/Home'

const Router = () => {
  return (
    <div>

      <Home />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/todolist' element={<TodoList />} />
      </Routes>
    </div>
  )
}

export default Router
