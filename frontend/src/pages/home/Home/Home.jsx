import React from 'react';

import Hero from '../hero/Hero';
import Country from '../countries/Country';
import OverviewOfServices from '../OverviewOfServices/OverviewOfServices';
import FAQ from '../FAQ/FAQ';
import CTA from '../CTA/CTA';
import BgImage from '../image-behind/bgImage';

function Home() {
  return (
    <>
      <Hero />
      <OverviewOfServices />
      <Country />
      <BgImage />
      <FAQ />
      <CTA />
    </>
  )
}

export default Home;
