"u"
import Image from 'next/image'
import HeroSection from './components/Hero-section';
import Navbar from './components/Navbar.jsx';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import './globals.css';
import AchievementsSection from './components/AchievementsSection';



export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col bg-[#121212] ">
     <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
   
      <HeroSection/>
      <AchievementsSection />
      <AboutSection />
      <ProjectsSection/>
      <EmailSection/>
      </div>
   
      <div className='star star1'></div>
      <div className='star star2'></div>
  
      <Footer/>
    </main>
  )
}
