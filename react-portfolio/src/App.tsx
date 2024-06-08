import About from "./pages/AboutPage"
import Skills from "./pages/SkillsPage"
import Projects from "./pages/ProjectsPage"
import Contact from "./pages/ContactPage"
import Menu from './components/Menu'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Menu />
    </>
  )
}

export default App