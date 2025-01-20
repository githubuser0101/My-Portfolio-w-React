import Header from "./components/Header"
import Intro from "./components/Intro"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"

function App() {

  // const projectImages = [
  //   "C:/Users/nowma/Desktop/The Portfolio/The Portfolio/src/assets/project_images/buyfy.jpeg",
  //   "C:/Users/nowma/Desktop/The Portfolio/The Portfolio/src/assets/project_images/Step-one.jpeg",
  //   "C:/Users/nowma/Desktop/The Portfolio/The Portfolio/src/assets/project_images/simon-game.png",
  //   "C:/Users/nowma/Desktop/The Portfolio/The Portfolio/src/assets/project_images/keeper.jpeg",
  //   "C:/Users/nowma/Desktop/The Portfolio/The Portfolio/src/assets/project_images/drum-kit.jpg",
  //   "C:/Users/nowma/Desktop/The Portfolio/The Portfolio/src/assets/project_images/dice-game.png",
  // ]

  return (
    <div className="w-full px-24 flex flex-col items-center gap-16">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects /> 
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
