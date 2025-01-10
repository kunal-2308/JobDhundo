import Footer from '@/components/shared/Footer'
import { PlaceholdersAndVanishInputDemo } from '@/components/shared/PlaceHolder'
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
      <SpotlightPreview />
      <EsteemedPartners />
      <PlaceholdersAndVanishInputDemo />
      <InfiniteMovingCardsIntitute />
      <InfiniteMovingCardsCompany />
      <Testimonials />
      <FlipWordsResources />
      <Footer />
      
    </div>
  )
}

export default Home
