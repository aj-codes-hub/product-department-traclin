import React from 'react'
import HeroSection from './Sections/Herosection/heroSection'
import AboutUs from './Sections/About/AboutUs'
import HowToUse from './Sections/HowToUse/HowToUse'



const ClientPortal:React.FC = () => {
  return (
    <div className='max-w-[1170px] w-full flex flex-col items-start border-black mx-auto text-[#161111]'>
        
        <HeroSection />
        <AboutUs />
        <HowToUse />

    </div>
  )
}

export default ClientPortal