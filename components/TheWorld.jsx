'use client';

import React, { useState } from 'react'
import SectionText from './SectionText'
import { motion } from 'framer-motion';
import { exploreWorlds } from '@/utils/data';
import { worldMotion , aboutMotion } from '@/utils/motion';

function TheWorld(props) {

  const [ide , setIde ] = useState('world-2')

  const handleClick = (elm) => {

    // exploreWorlds.map((world , index) => (
    //   setIde(()=> {
    //     return world.id
    //   })
    // ))
    setIde(elm)

  }

  return (
    <div className=' flex justify-center mb-16 md:my-24 md:mx-8 lg:my-20 lg:mx-16 mx-8 flex-col text-center'>
        <div className=''>
            <SectionText title = {'The World'} position={'justify-center'}/>
            <motion.h1 
              variants={aboutMotion(100 , 0.8)} 
              initial='hidden' 
              whileInView='visible'
              className=' lg:text-5xl md:text-3xl sm:text-xl: text-xl font-extrabold lg:leading-[75px]'>Choose The World You Want <br /> to Explore
            </motion.h1>
        </div>
        <div className=' grid lg:grid-cols-6 md:grid-cols-6 p-8 my-8 gap-4'>
          <motion.img 
            variants={worldMotion(-150 , 1)}
            initial='hidden'
            whileInView='visible'
            src='/planet-01.png'
            onClick={() => handleClick(exploreWorlds[0].id)}
            className={`lg:h-[96vh] md:h-[96vh] lg:rounded-[35px] md:rounded-3xl sm:rounded-2xl rounded-2xl object-cover ${ide === 'world-1' ? 'lg:col-span-2 md:col-span-2' : 'lg:col-span-1 md:col-span-1'} h-[10vh] w-full sm:h-[10vh] sm:w-full cursor-pointer`}
          />
          
          <motion.img 
            variants={worldMotion(100 , 1.3)}
            initial='hidden'
            whileInView='visible'
            src='/planet-02.png'
            onClick={() => handleClick(exploreWorlds[1].id)}
            className={` lg:h-[96vh] md:h-[96vh] lg:rounded-[35px] md:rounded-3xl sm:rounded-2xl rounded-2xl object-cover ${ide === 'world-2' ? 'lg:col-span-2 md:col-span-2' : 'lg:col-span-1 md:col-span-1'} h-[10vh] w-full sm:h-[10vh] sm:w-full cursor-pointer`}
          />
          {ide === 'world-2' ? (
            <div className=' absolute lg:mt-[460px] lg:ml-[223px] pl-12 bg-black/50 w-[434px] rounded-b-[35px]'>
              <img src='/headset.svg' className=' bg-slate-300/40 p-4 w-16 rounded-[22px] mt-8'/>
              <h3 className=' text-start mt-4 font-medium'>Enter Metaverse</h3>
              <h1 className=' lg:text-[32px] lg:font-bold text-start my-8'>{exploreWorlds[1].title}</h1>
            </div>
          ) : 
          <div className={` absolute -rotate-90 w-[250px] lg:mt-[500px] ${ide === 'world-1' ? 'lg:ml-[430px]': null} lg:ml-[200px]`}>
            <h1 className=' lg:text-[32px] lg:font-bold text-start'>{exploreWorlds[1].title}</h1>
          </div>}
          <motion.img 
            variants={worldMotion(-150 , 1.6)}
            initial='hidden'
            whileInView='visible'
            src='/planet-03.png'
            onClick={() => handleClick(exploreWorlds[2].id)}
            className={` lg:h-[96vh] md:h-[96vh] lg:rounded-[35px] md:rounded-3xl sm:rounded-2xl rounded-2xl object-cover ${ide === 'world-3' ? 'lg:col-span-2 md:col-span-2' : 'lg:col-span-1 md:col-span-1'} h-[10vh] w-full sm:h-[10vh] sm:w-full cursor-pointer`}            
          />
          <motion.img 
            variants={worldMotion(100 , 1.9)}
            initial='hidden'
            whileInView='visible'
            src='/planet-04.png'
            onClick={() => handleClick(exploreWorlds[3].id)}
            className={` lg:h-[96vh] md:h-[96vh] lg:rounded-[35px] md:rounded-3xl sm:rounded-2xl rounded-2xl object-cover ${ide === 'world-4' ? 'lg:col-span-2 md:col-span-2' : 'lg:col-span-1 md:col-span-1'} h-[10vh] w-full sm:h-[10vh] sm:w-full cursor-pointer`}            
          />
          <motion.img 
            variants={worldMotion(-150 , 2.2)}
            initial='hidden'
            whileInView='visible'
            src='/planet-05.png'
            onClick={() => handleClick(exploreWorlds[4].id)}
            className={` lg:h-[96vh] md:h-[96vh] lg:rounded-[35px] md:rounded-3xl sm:rounded-2xl rounded-2xl object-cover ${ide === 'world-5' ? 'lg:col-span-2 md:col-span-2' : 'lg:col-span-1 md:col-span-1'} h-[10vh] w-full sm:h-[10vh] sm:w-full cursor-pointer`}            
          />
        </div>
    </div>
  )
}

export default TheWorld