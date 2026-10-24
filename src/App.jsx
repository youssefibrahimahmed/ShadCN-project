import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
  </Route>
</Routes>
</BrowserRouter>       
       </>
  )
}

export default App
