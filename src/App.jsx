
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import TrustedBy from './components/TrustedBy'


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-black relative'>
     <Navbar theme={theme} setTheme={setTheme}></Navbar>
     <Hero></Hero>
     <TrustedBy></TrustedBy>
    </div>
  )
}

export default App
