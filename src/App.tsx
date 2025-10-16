import Navbar from "./components/navbar"
import Home from "./pages/home"
import About from './pages/about'
import Projects from "./pages/projects"
function App() {

  return (
    <>
    <header className="justify-center p-4  hidden md:flex"> 
      <Navbar />
    </header>
    <main className="">
      <Home />
      <About  />
      <Projects />
    </main>
    </>
  )
}

export default App
