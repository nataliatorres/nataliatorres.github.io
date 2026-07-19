import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import profilePicture from './assets/profile_picture.webp'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Title from './components/Title/Title'
import Logo from './components/Logo/Logo'
import MySkills from './components/MySkills/MySkills'
import Timeline from './components/Timeline/Timeline'
import { experienceItems } from './data/experience'
import ProjectGrid from './components/Projects/Projects'
import { projects } from './data/projects'
import HeroTypewriter from './components/HeroTypewriter/HeroTypewriter'
import { useRef } from 'react'
import useScrollReveal from './hooks/useScrollReveal'
import ContactForm from './components/ContactForm/ContactForm'

library.add(fas, far, fab)

function App () {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useScrollReveal(aboutRef)
  useScrollReveal(experienceRef)
  useScrollReveal(projectsRef)
  useScrollReveal(contactRef)

  return (
    <>
      <NavBar />
      <HeroTypewriter />
      <main className='bg-[#DFD3BD]'>
        <div id='about' ref={aboutRef} className='reveal flex justify-center flex-wrap-reverse max-w-400 mx-auto w-full px-12 pt-15 pb-40 lg:flex-nowrap lg:gap-14 text-[#4F5030] scroll-mt-20'>
          <div className='lg:content-center mt-2.5'>
            <Title type='h1' style='text-[#6B6E42] text-[4.2em] pb-10' title='How I build' />
            <p className='my-3.75 text-base md:text-lg text-left'>I'm a Brisbane based software engineer with over 5 years of experience building customer-facing web applications for US-based product teams.</p>
            <p className='my-3.75 text-base md:text-lg text-left'>My background spans frontend (JavaScript, React, TypeScript, HTML, CSS) and backend (PHP, Wordpress, Drupal, REST APIs) so I know what's happening on both sides of the fence. I've collaborated closely with designers, product owners, and engineers across time zones, and I treat every codebase like someone else will have to maintain it... because they will.</p>
            <p className='my-3.75 text-base md:text-lg text-left'>Currently building and growing in the Australian tech scene 🤓</p>
          </div>
          <div className='flex'>
            <figure className='flex flex-wrap place-content-center'>
              <Logo type='img' styles='max-w-[40vw] lg:max-w-[25vw] rounded-full' src={profilePicture} alt='Profile picture' href='' icon='' loading='lazy'/>
            </figure>
          </div>
        </div>
        <section className="flex flex-col md:flex-row justify-center items-stretch gap-20 max-w-400 mx-auto px-10 pb-40">
          <div id='experience' ref={experienceRef} className='reveal w-full md:w-[50%] flex flex-col scroll-mt-20'>
            <Title type='h1' style='text-[#6B6E42] text-[4.2em] pb-10' title="Where I've been" />
            <div className='flex flex-col flex-1 w-full mt-6 p-5 rounded-4xl border-4 border-[#909560] text-[#4F5030]'>
              <Timeline items={experienceItems} />
            </div>
          </div>
          <div id='skills' className='w-full md:w-[50%] flex flex-col scroll-mt-20'>
            <Title type='h1' style='text-[#6B6E42] text-[4.2em] pb-10' title='Tech Stack' />
            <MySkills />
          </div>
        </section>
        <section id='projects' ref={projectsRef} className='reveal scroll-mt-15 pt-15 pb-40'>
          <Title type='h1' style='text-[#6B6E42] text-[4.2em] pb-10' title='In the wild' />
          <ProjectGrid projects={projects} />
        </section>
        <div id='contact' ref={contactRef} className='reveal flex flex-col flex-wrap place-content-center max-w-400 mx-auto w-full p-12 text-[#4F5030]'>
          <Title type='h1' style='text-[#6B6E42] text-[4.2em] pb-5' title="Let's Connect" />
          <ContactForm/>
          <section className='flex items-center justify-center h-24 gap-2 mt-8'>
            <Logo type='a' src='' alt='' href='https://www.linkedin.com/in/nataliatr/' icon='fa-brands fa-square-linkedin' styles='fa-3x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115 hover:text-[#CA9248]' />
            <Logo type='a' src='' alt='' href='https://github.com/nataliatorres' icon='fa-brands fa-github-alt' styles='fa-4x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115 hover:text-[#CA9248]/80' />
            <Logo type='a' src='' alt='' href='https://www.npmjs.com/~nataliatrcodes' icon='fa-brands fa-npm' styles='fa-5x text-[#7D8050] transition-transform duration-400 ease-in-out hover:scale-115 hover:text-[#CA9248]/60' />
            <a href='https://app.thestorygraph.com/profile/nataliatr' target='_blank' rel='noreferrer'>
              <svg className='stroke-[1.6] stroke-[#7D8050] fill-none stroke-linecap-round stroke-linejoin-round transition-transform duration-400 hover:scale-115 hover:stroke-[#CA9248]/40' width='75px' height='70px' viewBox='0 0 48 48' id='a' xmlns='http://www.w3.org/2000/svg'>
                <defs />
                <g id='b'>
                  <g id='c'>
                    <rect id='d' className='h' x='5.5' y='6.6165' width='7.6031' height='29.8423' rx='1' ry='1' />
                    <rect id='e' className='h' x='16.5636' y='6.6165' width='7.6031' height='29.8423' rx='1' ry='1' />
                    <rect id='f' className='h' x='30.9108' y='6.3431' width='7.6033' height='29.8418' rx='1' ry='1' transform='translate(-4.6835 11.0135) rotate(-16.9062)' />
                    <rect id='g' className='h' x='5.5' y='39.0428' width='37' height='2.828' rx='1' ry='1' />
                  </g>
                </g>
              </svg>
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
