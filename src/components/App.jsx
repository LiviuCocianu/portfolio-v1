import ContactSection from './ContactSection'
import ContactsSidebar from './ContactsSidebar'
import Footer from './Footer'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import MainNavigation from './MainNavigation'
import ProjectsSection from './ProjectsSection'
import SkillsSection from './SkillsSection'

function App() {
  return (
    <div className="w-full h-full overflow-y-scroll snap-proximity snap-y">
      <MainNavigation/>
      <ContactsSidebar/>
      <HeroSection/>
      <IntroSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App
