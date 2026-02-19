import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


function App() {

  return (
    <>
    <NavBar/>
      <main className="bg-[#DFD3BD]">
        <Section id="about" title={"About"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ex quis magna viverra ultricies at faucibus nisl. Sed sit amet sem finibus, lacinia libero et, viverra dolor. Ut nec eros nec erat rutrum condimentum. Sed vehicula efficitur pulvinar. Nullam vitae facilisis massa, nec pulvinar odio. Sed a urna ac augue convallis maximus. Cras pellentesque mauris id ullamcorper vestibulum. Nulla aliquet posuere dolor sit amet consequat. Nulla sed dignissim neque. Fusce elit nunc, blandit non fringilla eu, imperdiet sed erat. Duis porta convallis arcu eget commodo. \n Fusce hendrerit a velit ullamcorper ultrices. Nam tincidunt orci quis diam volutpat, vel molestie orci eleifend. Ut a nunc turpis. Integer luctus auctor pulvinar. Nulla ornare mollis tempor. Donec mattis neque vulputate dolor iaculis, a auctor diam elementum. Mauris leo tortor, fermentum et tincidunt non, varius vel libero. Maecenas sollicitudin egestas nisi. Curabitur eu fermentum risus. Donec lacus felis, consectetur nec nibh ac, placerat iaculis enim. Fusce volutpat, leo eget placerat tempor, neque dolor egestas ex, in fermentum magna lacus et metus. Aliquam id cursus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis placerat turpis sed condimentum. Maecenas a nibh suscipit, sollicitudin ante id, viverra nibh.\n Ut at aliquam turpis. Donec eget tellus sit amet turpis placerat consequat non vestibulum est. In venenatis scelerisque libero et varius. Maecenas mollis feugiat hendrerit. Vestibulum ullamcorper orci tortor, eu convallis felis congue lobortis. Duis vel tortor finibus, vestibulum justo eu, congue lorem. Praesent dictum sapien quis purus molestie ornare. Etiam dictum scelerisque nibh, et facilisis ligula aliquam et. Fusce nec fermentum ex, eget consequat sapien. Mauris iaculis felis quis faucibus hendrerit."} imgSource={"https://unavatar.io/github/nataliatorres"} />
        <Section id="projects" title={"Test"} text={"Plantitas"} imgSource={""} />
        <div id="contact" className="flex flex-col flex-wrap place-content-center max-w-300 mx-auto w-full p-12 text-[#4F5030]">
          <h1>Contact me</h1>
          <section className="flex place-items-center h-24 gap-2">
            <a href="https://github.com/nataliatorres" target="_blank"> <FontAwesomeIcon icon="fa-brands fa-github-alt" className="fa-4x text-[#4F5030] transition-transform duration-400 hover:scale-115"/> </a>
            <a href="https://github.com/nataliatorres" target="_blank"> <FontAwesomeIcon icon="fa-brands fa-square-linkedin" className="fa-3x text-[#4F5030] transition-transform duration-400 ease-in-out hover:scale-115"/> </a>
            <a href="https://www.npmjs.com/~nataliatrcodes" target='_blank'> <FontAwesomeIcon icon="fa-brands fa-npm"  className="fa-5x text-[#4F5030] transition-transform duration-400 ease-in-out hover:scale-115"/> </a>
        </section>
        </div>
        
        
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
