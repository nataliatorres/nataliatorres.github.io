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
        <Section id="about" title={"About"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ex quis magna viverra ultricies at faucibus nisl. Sed sit amet sem finibus, lacinia libero et, viverra dolor. Ut nec eros nec erat rutrum condimentum. Sed vehicula efficitur pulvinar. Nullam vitae facilisis massa, nec pulvinar odio. Sed a urna ac augue convallis maximus. Cras pellentesque mauris id ullamcorper vestibulum. Nulla aliquet posuere dolor sit amet consequat. Nulla sed dignissim neque. Fusce elit nunc, blandit non fringilla eu, imperdiet sed erat. Duis porta convallis arcu eget commodo. \n Fusce hendrerit a velit ullamcorper ultrices. Nam tincidunt orci quis diam volutpat, vel molestie orci eleifend. Ut a nunc turpis. Integer luctus auctor pulvinar. Nulla ornare mollis tempor. Donec mattis neque vulputate dolor iaculis, a auctor diam elementum. Mauris leo tortor, fermentum et tincidunt non, varius vel libero. Maecenas sollicitudin egestas nisi. Curabitur eu fermentum risus. Donec lacus felis, consectetur nec nibh ac, placerat iaculis enim. Fusce volutpat, leo eget placerat tempor, neque dolor egestas ex, in fermentum magna lacus et metus. Aliquam id cursus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis placerat turpis sed condimentum. Maecenas a nibh suscipit, sollicitudin ante id, viverra nibh.\n Ut at aliquam turpis. Donec eget tellus sit amet turpis placerat consequat non vestibulum est. In venenatis scelerisque libero et varius. Maecenas mollis feugiat hendrerit. Vestibulum ullamcorper orci tortor, eu convallis felis congue lobortis. Duis vel tortor finibus, vestibulum justo eu, congue lorem. Praesent dictum sapien quis purus molestie ornare. Etiam dictum scelerisque nibh, et facilisis ligula aliquam et. Fusce nec fermentum ex, eget consequat sapien. Mauris iaculis felis quis faucibus hendrerit."} imgSource={"https://unavatar.io/github/nataliatorres"} />
        <Section id="projects" title={"Test"} text={"Plantitas"} imgSource={""} />
        <Section id="contact" title={"Test"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis hic repudiandae quaerat impedit, fugit laboriosam ex vel corporis deleniti voluptatum cumque dignissimos suscipit assumenda aperiam possimus esse aliquam asperiores rem."} imgSource={""} />
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
