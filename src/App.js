import React from 'react'
import Protfolio from './Protfolio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SecondPage from './SecondPage'

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/SecondPage' element={<SecondPage/>}></Route>
  <Route path='/' element={<Protfolio/>}></Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
