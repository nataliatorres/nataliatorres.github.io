import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Hamburger from './Hamburger'

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const navItems = ['About', 'Experience', 'Skills', 'Contact']

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <header className='top-0 sticky border-solid z-20 bg-[#4F5030]'>
      <div className='max-w-400 mx-auto w-full flex items-center justify-between gap-4 duration-200 px-8 lg:px-6 py-6 lg:py-4'>
        <a className='flex text-center font-medium sm:text-lg' href=''>
          <FontAwesomeIcon icon='fa-solid fa-house' className='fa-2x' />
        </a>
        <nav>
          <div onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerOpen} />
          </div>
          <ul className={`${hamburgerOpen ? 'flex' : 'hidden'} flex-col justify-evenly h-50 md:h-10 w-90 lg:w-100 bg-[#4F5030]/85 absolute top-20 right-0 rounded-bl-[10px] md:flex md:flex-row md:items-center md:gap-5 lg:gap-2 md:static`}>
            {
                            navItems.map((item, index) => (
                              <a onClick={toggleHamburger} className='relative overflow-hidden group font-medium text-lg md:font-normal md:text-xl' href={`#${item.toLocaleLowerCase()}`} key={index}>
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
