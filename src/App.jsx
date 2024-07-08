import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Follow from './components/Follow'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const navlinks = [
    {
      id : 1,
      name : "Home",
      redirect : '/'
    },
    {
      id : 2,
      name : "About",
      redirect : '#about'
    },
    {
      id : 3,
      name : "Contact",
      redirect : '#contact'
    },
  ]

  return (
    <div className='text-white'>
      <Navbar navlinks={navlinks}/>
      <Landing />
      <Skills />
      <About />
      <Projects />
      <Technologies />
      <Follow />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
