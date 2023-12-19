'use client';


import React from 'react'
import Image from 'next/image'
import { navMotion } from '@/utils/motion'
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <motion.nav 
      variants={navMotion}
      initial="hidden"
      whileInView="visible"
      className=' flex justify-around gap-4 mx-auto my-8' 
      >
      <Image 
        src={'/search.svg'}
        alt='search'
        width={35}
        height={35}
        className=' z-10'
      />
      <h1 className=' text-2xl font-bold z-10'>METAVERSUS</h1>
      <Image 
        src={'/menu.svg'}
        alt='menu'
        width={35}
        height={35}
        className=' z-10'
      />
    </motion.nav>
  )
}

export default Navbar