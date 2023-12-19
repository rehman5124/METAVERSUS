import React from 'react'
import { exploreWorlds } from '@/utils/data'
import { Navbar, Hero, About, TheWorld, Working, WhatsNew, Environment, Insights, FounderInfo, EnterMeta, Footer, } from '@/components'

function page() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TheWorld />
      <Working />
      <WhatsNew />
      <Environment />
      <Insights />
      <FounderInfo />
      <Footer />
    </div>
  )
}

export default page