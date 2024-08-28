import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Techstack from './pages/Techstack'

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
