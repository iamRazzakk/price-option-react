import { useState } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOption from './components/PriceOptions/PriceOptions'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'

function App() {

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart ></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
