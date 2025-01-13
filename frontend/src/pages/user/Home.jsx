import Footer from '@/components/user/shared/Footer'
import { Navbar } from '@/components/user/shared/Navbar'
import { PlaceholdersAndVanishInputDemo } from '@/components/user/shared/PlaceHolder'
import { InfiniteMovingCardsCompany } from '@/components/user/home/CompanyRoller'
import EsteemedPartners from '@/components/user/home/EsteemedPartners'
import { SpotlightPreview } from '@/components/user/home/HeroSection1'
import { InfiniteMovingCardsIntitute } from '@/components/user/home/InstituteRoller'
import { FlipWordsResources } from '@/components/user/home/ResourcesHomeSection'
import Testimonials from '@/components/user/home/Testimonials'
import React from 'react'

function Home() {
  return (
    <div>
      <Navbar />
      <SpotlightPreview />
      <EsteemedPartners />
      <PlaceholdersAndVanishInputDemo />
      <InfiniteMovingCardsIntitute />
      <InfiniteMovingCardsCompany />
      <Testimonials />
      <FlipWordsResources />
    </div>
  )
}

export default Home
