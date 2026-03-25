import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import Hamburger from './Hamburger'

// custom hook to watch the window width
const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowWidth
  }

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const windowWidth = useWindowWidth()
  const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  //useEffect to close the hamburger menu when the screen changes to md and the hamburgerOpen variable is true
  useEffect(() => {
    if (hamburgerOpen && windowWidth >= 768) {
      setHamburgerOpen(false)
    }
}, [windowWidth])

  //useEffect that closes the hamburger menu when the user clicks outside of the navbar
  useEffect(() => {
    const handleClickOutside = (e) => {
      const nav = document.querySelector('nav')
      if (nav && !nav.contains(e.target)) {
        setHamburgerOpen(false)
      }
    }
    if (hamburgerOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [hamburgerOpen])

  return (
    <header className='top-0 sticky border-solid z-20 bg-[#4F5030]'>
      <div className='max-w-400 mx-auto w-full flex items-center justify-between gap-4 duration-200'>
        <a className='flex text-center font-medium text-lg md:text-xl mt-5 mb-5 ml-10' href=''>
          <FontAwesomeIcon icon='fa-solid fa-house' className='fa-2x' />
        </a>
        <nav className='mt-5 mb-5 mr-10'>
          <div onClick={() => windowWidth <= 768 && toggleHamburger()}>
            <Hamburger isOpen={hamburgerOpen} />
          </div>
          <ul className={`${hamburgerOpen && windowWidth <= 768 ? 'flex w-60' : 'hidden md:w-112.5'} flex-col justify-evenly h-50 md:h-10 lg:w-125 bg-[#4F5030]/85 absolute top-19 right-0 rounded-bl-[10px] md:flex md:flex-row md:items-center gap-2.5 xl:gap-4 md:static`}>
            {
                            navItems.map((item, index) => (
                              <a onClick={() => windowWidth <= 768 && toggleHamburger()} className='relative overflow-hidden group font-medium text-lg md:font-normal md:text-xl' href={`#${item.toLowerCase()}`} key={index}>
                                {item}
                                <div className='hidden md:block md:absolute bottom-0 right-full group-hover:translate-x-full duration-300 h-[1.5px] w-full bg-[#CA9248]' />
                              </a>
                            ))
                        }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
