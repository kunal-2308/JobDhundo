import { PlaceholdersAndVanishInputDemo } from '@/components/shared/PlaceHolder'
import CategoryButtons from '@/components/user/CategoryButtons'
import EsteemedPartners from '@/components/user/EsteemedPartners'
import { SpotlightPreview } from '@/components/user/HeroSection1'
import React from 'react'

function Home() {
  return (
    <div>
     <SpotlightPreview/>
     <EsteemedPartners/>
     <PlaceholdersAndVanishInputDemo/>
     
    </div>
  )
}

export default Home
