import Footer from '@/components/user/shared/Footer'
import { Navbar } from '@/components/user/shared/Navbar'
import { PlaceholdersAndVanishInputDemo } from '@/components/user/shared/PlaceHolder'
import { InfiniteMovingCardsCompany } from '@/components/user/CompanyRoller'
import EsteemedPartners from '@/components/user/EsteemedPartners'
import { SpotlightPreview } from '@/components/user/HeroSection1'
import { InfiniteMovingCardsIntitute } from '@/components/user/InstituteRoller'
import { FlipWordsResources } from '@/components/user/ResourcesHomeSection'
import Testimonials from '@/components/user/Testimonials'
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
