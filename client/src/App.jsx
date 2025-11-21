import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import History from './pages/History'
import About from './pages/About'
import Footer from './components/Footer'
import Header from './components/Header'


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App