import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <NavBar/>
      <main className="bg-[#DFD3BD]">
        <Section id="about-section" title={"About"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis hic repudiandae quaerat impedit, fugit laboriosam ex vel corporis deleniti voluptatum cumque dignissimos suscipit assumenda aperiam possimus esse aliquam asperiores rem."} imgSource={"https://unavatar.io/github/nataliatorres"} />
        <Section id="hobbies-section" title={"Test"} text={"Plantitas"} imgSource={""} />
        <Section id="contact-section" title={"Test"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis hic repudiandae quaerat impedit, fugit laboriosam ex vel corporis deleniti voluptatum cumque dignissimos suscipit assumenda aperiam possimus esse aliquam asperiores rem."} imgSource={""} />
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
