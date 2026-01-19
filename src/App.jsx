
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Terms from './components/Terms'
import ContactUs from './components/ContactUs'


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-black relative'>
     <Navbar theme={theme} setTheme={setTheme}></Navbar>
     <Hero></Hero>
     <TrustedBy></TrustedBy>
     <Services></Services>
     <OurWork></OurWork>
     <Terms></Terms>
     <ContactUs></ContactUs>
    </div>
  )
}

export default App
