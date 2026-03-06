import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import FeaturedProjects from './components/FeaturedProjects'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <FeaturedProjects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
