import Navbar from "./components/navbar"
import Home from "./assets/pages/home"

function App() {

  return (
    <>
    <header className="justify-center p-10 flex"> 
      <Navbar />
    </header>
    <main>
      <Home />
    </main>
    </>
  )
}

export default App
