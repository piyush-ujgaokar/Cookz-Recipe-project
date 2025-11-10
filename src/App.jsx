import React from 'react'
import MainRoutes from './routes/MainRoutes'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className=' px-5 py-2 bg-gray-800 text-white text-2xl font-thin h-screen w-screen'>
      <NavBar/>
      <MainRoutes />
    </div>
  )
}

export default App