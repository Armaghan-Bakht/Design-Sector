import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import FeaturedProjects from "./components/FeaturedProjects";
import ProductStatCards from "./components/ProductStatCards";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100 relative">
      <CursorGlow />
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Marquee />
        <Projects />
        <FeaturedProjects />
        <ProductStatCards />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
