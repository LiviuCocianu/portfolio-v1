import ContactSection from './ContactSection'
import ContactsSidebar from './ContactsSidebar'
import Footer from './Footer'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import MainNavigation from './MainNavigation'
import ProjectsSection from './ProjectsSection'
import TechStackSection from './TechStackSection'

function App() {
  return (
    <div className="w-full h-full overflow-y-scroll snap-proximity snap-y">
      <MainNavigation/>
      <ContactsSidebar/>
      <HeroSection/>
      <IntroSection/>
      <TechStackSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App
