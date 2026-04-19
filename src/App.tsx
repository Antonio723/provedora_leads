import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Benefits from './components/Benefits'
import Coverage from './components/Coverage'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Plans />
      <Benefits />
      <Coverage />
      <Testimonials />
      <About />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
