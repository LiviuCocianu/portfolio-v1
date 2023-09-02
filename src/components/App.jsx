import ContactsSidebar from './ContactsSidebar'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import MainNavigation from './MainNavigation'
import SkillsSection from './SkillsSection'

function App() {
  return (
    <div className="w-full h-full overflow-y-scroll snap-proximity snap-y">
      <MainNavigation/>
      <ContactsSidebar/>
      <HeroSection/>
      <IntroSection/>
      <SkillsSection/>
    </div>
  )
}

export default App
