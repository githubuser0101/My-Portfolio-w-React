import Header from "./components/Header"
import Intro from "./components/Intro"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

function App() {
  const images = [
    'https://picsum.photos/400/300',
    'https://picsum.photos/400/301',
    'https://picsum.photos/400/302'
  ]

  return (
    <div className="w-full px-24 flex flex-col items-center gap-16">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects images={images}/>
    </div>
  )
}

export default App
