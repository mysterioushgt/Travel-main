import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Book from './component/Book'
import Service from './component/Service'
import Contact from './component/Contact'
import Register from './component/Register'
import Signup from './component/Signup'

function App() {
  return (
    <>
    <Header/>
   <Routes>
    <Route path="/" element={<Home/> } />
    <Route path="/book" element={<Book/> } />
    <Route path="/service" element={<Service/> } />
    <Route path="/contact" element={<Contact/> } />
    <Route path="/register" element={<Register/> } />
    <Route path="/signup" element={<Signup/> } />
   </Routes>

    <Footer/>
    </>
  )
}

export default App