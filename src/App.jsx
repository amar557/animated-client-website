import React from 'react'
import Navbar from './componenets/Navbar'
import "./App.css"
import Hero from './componenets/Hero'
import VideoSec from './componenets/VideoSec'
import Broght from './componenets/Broght'
import MainTypo from './componenets/MainTypo'
import TextWithScrollEffect from './componenets/Testing'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <VideoSec/>
      <Broght/>
      <MainTypo/>
      <TextWithScrollEffect/>
    </div>
  )
}

export default App