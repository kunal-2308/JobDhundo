import { PlaceholdersAndVanishInputDemo } from '@/components/shared/PlaceHolder'
import { InfiniteMovingCardsCompany } from '@/components/user/CompanyRoller'
import EsteemedPartners from '@/components/user/EsteemedPartners'
import { SpotlightPreview } from '@/components/user/HeroSection1'
import { InfiniteMovingCardsIntitute } from '@/components/user/InstituteRoller'
import React from 'react'

function Home() {
  return (
    <div>
     <SpotlightPreview/>
     <EsteemedPartners/>
     <PlaceholdersAndVanishInputDemo/>
      <InfiniteMovingCardsIntitute/>
      <InfiniteMovingCardsCompany/>
    
     
    </div>
  )
}

export default Home
