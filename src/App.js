import './App.scss'
import { Routes, Route } from 'react-router-dom'
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
        </Route>
        <Route path="/resume" element={<Layout />}>
          <Route index element={<Resume />} />
        </Route>
        <Route path="/projects" element={<Layout />}>
          <Route index element={<Projects />} />
        </Route>
        <Route path="/blog" element={<Layout />}>
          <Route index element={<Blog />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
