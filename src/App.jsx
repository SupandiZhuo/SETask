
import React from 'react'
import { useState } from 'react'
import Navbar from './Components/NavBar/NavBar'
import { Background } from './Components/Background/Background'
import { ListCourse } from './Components/ListCourse/ListCourse'

function App() {
  return(
    <div>
      <Navbar />
      <Background />
      <ListCourse />
    </div>
  )
}

export default App
