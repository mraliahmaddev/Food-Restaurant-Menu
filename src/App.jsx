import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { dataContext } from './context/UserContext'
import { ToastContainer } from 'react-toastify'

function App() {
  const {showCart,} = useContext(dataContext)
  return (
    < div className={`w-full h-screen scroll-smooth  bg-gray-200 ${showCart ? "overflow-y-hidden" : "block"} `}>
      <Home/>
      <ToastContainer />
    </div>
  )
}

export default App