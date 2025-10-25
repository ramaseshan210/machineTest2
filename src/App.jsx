import { useState } from 'react'
import Quote from './components/Quote'
import InputField from './components/InputField'
import Dropdown from "./components/Dropdown"
import Form from "./components/Form"
import { BrowserRouter,Routes, Route } from 'react-router'

function App() {


  return (
    <>
    <div className='flex text-[#FFFFFF]  px-20 bg-[#111C2D] h-screen  justify-center items-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form/>}/> 
          <Route path='/quote' element={<Quote/>}/>
      
        </Routes>
      </BrowserRouter>
      {/* <Quote/> */}
      {/* <Form/> */}
      {/* <Dropdown/> */}
    </div>  
  
    </>
  )
}

export default App

