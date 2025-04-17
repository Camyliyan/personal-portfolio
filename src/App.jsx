import './App.css'
import About from './components/About'
import Navigation from './components/Navigation'
import Herosection from './components/Herosection'
import Education from './components/Education'
import ProfessionalExperience from './components/ProfessionalExperience'
import Business from './components/Business'
import Skill from './components/Skill'
import Clubs from './components/Clubs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navigation />
      <section id="home">
        <Herosection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <ProfessionalExperience />
      </section>
      <section id="business">
        <Business />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="clubs">
        <Clubs />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  )
}

export default App
