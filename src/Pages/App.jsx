import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../App.css'
import Navbar from '../components/Navbar'
import Landing from '../Landing'
import Aboutme from '../Aboutme'
import Services from '../Services'
import Portfolio from '../Portfolio'
import Contact from '../Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Aboutme />
              <Services />
              <Portfolio />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
