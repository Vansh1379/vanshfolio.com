import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Techstack from './pages/Techstack'
import { Shoppr } from './pages/Shoppr'
import { Vpayments } from './pages/Vpayments'
import { Portfolio } from './pages/Vanshfolio'

const App = () => {

  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/techstack' element={<Techstack />} />
          <Route path='/shoppr' element={<Shoppr />} />
          <Route path='/vpay' element={<Vpayments />} />
          <Route path='/vanshfolio' element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
