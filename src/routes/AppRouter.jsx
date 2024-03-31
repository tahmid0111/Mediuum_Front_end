import React from 'react'
import { Route, Routes } from 'react-router-dom'
// importing pages
import HomePage from '../pages/HomePage'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default AppRouter
