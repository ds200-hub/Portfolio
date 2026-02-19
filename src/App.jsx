import About from "./Components/About/About"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Project from "./Components/Projects/Project"
import Skills from "./Components/Skills/skills"

function App() {

  return (
    <>
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
