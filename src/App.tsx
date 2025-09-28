import Navbar from "./components/navbar"
import Home from "./pages/home"
import About from './pages/about'
function App() {

  return (
    <>
    <header className="justify-center p-10  hidden md:flex"> 
      <Navbar />
    </header>
    <main>
      <Home />
      <About  />
    </main>
    </>
  )
}

export default App
