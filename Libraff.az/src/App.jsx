import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayout from '../Layout/MainLayout'
import DetailsLayout from '../Layout/DetailsLayout'
import Section from '../components/Section'
import Details from '../components/Details'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/kitab' element={<DetailsLayout />}>
        <Route path=':book' element={<Details />} />

      </Route>
    </Routes>
  )
}

export default App
