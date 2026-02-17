import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Landing'
import Aboutme from './Pages/Aboutme'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing></Landing>
      <Aboutme></Aboutme>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </>
  )
}

export default App
