import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import profilePicture from './assets/profile_picture.jpeg'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Title from './components/Title/Title'

library.add(fas, far, fab)

function App () {
  return (
    <>
      <NavBar />
      <main className='bg-[#DFD3BD]'>
        <div id='about' className='flex justify-center flex-wrap-reverse max-w-300 mx-auto w-full px-12 py-15 lg:flex-nowrap lg:gap-14 text-[#4F5030] '>
          <div className='lg:content-center mt-2.5'>
            <Title type='h1' title='How I build' />
            <p className='my-3.75 text-[18px] md:text-[20px] text-left'>Hi, I’m Natalia — a Colombian software engineer based in Brisbane. I bring over five years of experience building customer-facing web applications for US-based product teams, working fully remotely in collaborative, product-driven teams. My background spans backend development (PHP, Drupal, REST APIs, relational databases) and frontend technologies (WordPress, JavaScript, HTML, CSS), allowing me to connect technical implementation with real user experience.</p>
            <p className='my-3.75 text-[18px] md:text-[20px] text-left'>I care deeply about clean, maintainable code and building digital products that solve real problems. Having collaborated closely with designers, product owners, and engineers across time zones, I’ve developed strong communication skills and a detail-oriented approach to delivery. I enjoy turning complex requirements into intuitive interfaces, and creating digital products that solve real problems.</p>
            <p className='my-3.75 text-[18px] md:text-[20px] text-left'>Currently, I’m focused on growing as a frontend developer and aligning my skills with industry practices in Australia. I’m curious, proactive, and committed to continuous learning — always aiming to contribute thoughtfully to teams building technology that truly serves people.</p>
          </div>
          <div className='flex'>
            <figure className='flex flex-wrap place-content-center'>
              <img className='max-w-[40vw] lg:max-w-[25vw] rounded-full' src={profilePicture} alt='Profile picture' />
            </figure>
          </div>
        </div>
        <div id='contact' className='flex flex-col flex-wrap place-content-center max-w-300 mx-auto w-full p-12 text-[#4F5030]'>
          <Title type='h1' title="Let's Connect" />
          <section className='flex place-items-center h-24 gap-2'>
            <a href='https://www.linkedin.com/in/nataliatr/' target='_blank' rel='noreferrer'> <FontAwesomeIcon icon='fa-brands fa-square-linkedin' className='fa-3x text-[#4F5030] transition-transform duration-400 ease-in-out hover:scale-115' /> </a>
            <a href='https://github.com/nataliatorres' target='_blank' rel='noreferrer'> <FontAwesomeIcon icon='fa-brands fa-github-alt' className='fa-4x text-[#4F5030] transition-transform duration-400 hover:scale-115' /> </a>
            <a href='https://www.npmjs.com/~nataliatrcodes' target='_blank' rel='noreferrer'> <FontAwesomeIcon icon='fa-brands fa-npm' className='fa-5x text-[#4F5030] transition-transform duration-400 ease-in-out hover:scale-115' /> </a>
            <a href='https://app.thestorygraph.com/profile/nataliatr' target='_blank' rel='noreferrer'>
              <svg className='stroke-[1.6] stroke-[#4F5030] fill-none stroke-linecap-round stroke-linejoin-round transition-transform duration-400 hover:scale-115' width='75px' height='70px' viewBox='0 0 48 48' id='a' xmlns='http://www.w3.org/2000/svg'>
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
