
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-black relative'>
     <Navbar theme={theme} setTheme={setTheme}></Navbar>
     <Hero></Hero>
    </div>
  )
}

export default App
