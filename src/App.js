import './App.scss'
import { Routes, Route } from 'react-router-dom'

// components
import Layout from './components/Layout'
import Home from './components/Home'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
