import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Section from './components/Section/Section'

function App() {

  return (
    <>
    <NavBar/>
      <main>
        <Section title="About"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis hic repudiandae quaerat impedit, fugit laboriosam ex vel corporis deleniti voluptatum cumque dignissimos suscipit assumenda aperiam possimus esse aliquam asperiores rem."
        imgSource="https://unavatar.io/github/nataliatorres" />
      </main>
    </>
  )
}

export default App
