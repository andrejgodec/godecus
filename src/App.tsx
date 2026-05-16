import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import EuropassPrint from './components/EuropassPrint'

export default function App() {
  return (
    <>
      <EuropassPrint />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
