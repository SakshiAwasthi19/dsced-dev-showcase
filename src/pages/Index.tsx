
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import MentorsSection from '@/components/MentorsSection'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import ThemeToggle from '@/components/ThemeToggle'
import { Toaster } from '@/components/ui/toaster'

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ThemeToggle />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <MentorsSection />
      <Contact />
      <Toaster />
    </div>
  );
};

export default Index;
