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
    <div
      className={` flex justify-center mb-16 md:my-24 md:mx-8 lg:my-20 lg:mx-16 mx-8 flex-col text-center `}
    >
      <div className="">
        <SectionText title={"The World"} position={"justify-center"} />
        <motion.h1
          variants={aboutMotion(100, 0.8)}
          initial="hidden"
          whileInView="visible"
          className=" lg:text-5xl md:text-3xl sm:text-xl: text-xl font-extrabold lg:leading-[75px]"
        >
          Choose The World You Want <br /> to Explore
        </motion.h1>
      </div>
      <div className=" grid lg:grid-cols-6 md:grid-cols-6 p-8 my-8 gap-4">
        <motion.img
          variants={worldMotion(-150, 1)}
          initial="hidden"
          whileInView="visible"
          src="/planet-01.png"
          onClick={() => handleClick(exploreWorlds[0].id)}
          className={`lg:h-[96vh] md:h-[96vh] lg:rounded-[35px] md:rounded-3xl sm:rounded-2xl rounded-2xl object-cover ${
            ide === "world-1"
              ? "lg:col-span-2 md:col-span-2"
              : "lg:col-span-1 md:col-span-1"
          } h-[10vh] w-full sm:h-[10vh] sm:w-full cursor-pointer`}
        />
        <motion.img
          variants={worldMotion(100, 1.3)}
          initial="hidden"
          whileInView="visible"
          src="/planet-02.png"
          onClick={() => handleClick(exploreWorlds[1].id)}
          className={` lg:h-[96vh] md:h-[96vh] lg:rounded-[35px] md:rounded-3xl sm:rounded-2xl rounded-2xl object-cover ${
            ide === "world-2"
              ? "lg:col-span-2 md:col-span-2"
              : "lg:col-span-1 md:col-span-1"
          } h-[10vh] w-full sm:h-[10vh] sm:w-full cursor-pointer`}
        />
        <motion.img
          variants={worldMotion(-150, 1.6)}
          initial="hidden"
          whileInView="visible"
          src="/planet-03.png"
          onClick={() => handleClick(exploreWorlds[2].id)}
          className={` lg:h-[96vh] md:h-[96vh] lg:rounded-[35px] md:rounded-3xl sm:rounded-2xl rounded-2xl object-cover ${
            ide === "world-3"
              ? "lg:col-span-2 md:col-span-2"
              : "lg:col-span-1 md:col-span-1"
          } h-[10vh] w-full sm:h-[10vh] sm:w-full cursor-pointer`}
        />
        <motion.img
          variants={worldMotion(100, 1.9)}
          initial="hidden"
          whileInView="visible"
          src="/planet-04.png"
          onClick={() => handleClick(exploreWorlds[3].id)}
          className={` lg:h-[96vh] md:h-[96vh] lg:rounded-[35px] md:rounded-3xl sm:rounded-2xl rounded-2xl object-cover ${
            ide === "world-4"
              ? "lg:col-span-2 md:col-span-2"
              : "lg:col-span-1 md:col-span-1"
          } h-[10vh] w-full sm:h-[10vh] sm:w-full cursor-pointer`}
        />
        <motion.img
          variants={worldMotion(-150, 2.2)}
          initial="hidden"
          whileInView="visible"
          src="/planet-05.png"
          onClick={() => handleClick(exploreWorlds[4].id)}
          className={` lg:h-[96vh] md:h-[96vh] lg:rounded-[35px] md:rounded-3xl sm:rounded-2xl rounded-2xl object-cover ${
            ide === "world-5"
              ? "lg:col-span-2 md:col-span-2"
              : "lg:col-span-1 md:col-span-1"
          } h-[10vh] w-full sm:h-[10vh] sm:w-full cursor-pointer`}
        />

      </div>

      <div className=' mx-8 relative bottom-36 xm:invisible sm:invisible md:visible lg:visible'>
        <div className=' grid grid-flow-col grid-cols-6 gap-4 text-start justify-items-center text-3xl font-semibold'>
        {/* World-1 */}

        {ide === 'world-1' ? (<div className=' bg-black/50 col-span-2 w-full pl-12 lg:rounded-[35px] md:rounded-3xl relative lg:bottom-[7.7rem] md:bottom-40'>
            <img 
              src='/headset.svg'
              alt='headset'
              className=' w-16 p-4 bg-slate-400/80 rounded-3xl mt-4'
            />
            <h3 className=' text-base pt-2'>Enter Metaverse</h3>
            <h1 className=' py-8 md:w-2 lg:w-full'>{exploreWorlds[0].title}</h1>
          </div>) : (<div className={` w-2 -rotate-90 relative bottom-14 lg:left-16 lg:text-3xl md:text-2xl md:left-[5.5rem]`}>{exploreWorlds[0].title}</div>)}

          {/* World-2 */}

          {ide === 'world-2' ? (<div className=' bg-black/50 col-span-2 w-full pl-12 lg:rounded-[35px] md:rounded-3xl relative lg:bottom-[7.7rem] md:bottom-40'>
            <img 
              src='/headset.svg'
              alt='headset'
              className=' w-16 p-4 bg-slate-400/80 rounded-3xl mt-4'
            />
            <h3 className=' text-base pt-2'>Enter Metaverse</h3>
            <h1 className=' py-8 md:w-2 lg:w-full'>{exploreWorlds[1].title}</h1>
          </div>) : (<div className=' w-2 -rotate-90 relative bottom-14 lg:left-16 lg:text-3xl md:text-2xl md:left-[5.5rem]'>{exploreWorlds[1].title}</div>)}

          {/* World-3 */}

          {ide === 'world-3' ? (<div className=' bg-black/50 col-span-2 w-full pl-12 lg:rounded-[35px] md:rounded-3xl relative lg:bottom-[7.7rem] md:bottom-40'>
            <img 
              src='/headset.svg'
              alt='headset'
              className=' w-16 p-4 bg-slate-400/80 rounded-3xl mt-4'
            />
            <h3 className=' text-base pt-2'>Enter Metaverse</h3>
            <h1 className=' py-8 md:w-2 lg:w-full'>{exploreWorlds[2].title}</h1>
          </div>) : (<div className=' w-2 -rotate-90 relative bottom-14 lg:left-16 lg:text-3xl md:text-2xl md:left-[5.5rem]'>{exploreWorlds[2].title}</div>)}

          {/* World-4 */}

          {ide === 'world-4' ? (<div className=' bg-black/50 col-span-2 w-full pl-12 lg:rounded-[35px] md:rounded-3xl relative lg:bottom-[7.7rem] md:bottom-40'>
            <img 
              src='/headset.svg'
              alt='headset'
              className=' w-16 p-4 bg-slate-400/80 rounded-3xl mt-4'
            />
            <h3 className=' text-base pt-2'>Enter Metaverse</h3>
            <h1 className=' py-8 md:w-2 lg:w-full'>{exploreWorlds[3].title}</h1>
          </div>) : (<div className=' w-2 -rotate-90 relative bottom-14 lg:left-16 lg:text-3xl md:text-2xl md:left-[5.5rem]'>{exploreWorlds[3].title}</div>)}

          {/* World-5 */}

          {ide === 'world-5' ? (<div className=' bg-black/50 col-span-2 w-full pl-12 lg:rounded-[35px] md:rounded-3xl relative lg:bottom-[7.7rem] md:bottom-40'>
            <img 
              src='/headset.svg'
              alt='headset'
              className=' w-16 p-4 bg-slate-400/80 rounded-3xl mt-4'
            />
            <h3 className=' text-base pt-2'>Enter Metaverse</h3>
            <h1 className=' py-8 md:w-2 lg:w-full'>{exploreWorlds[4].title}</h1>
          </div>) : (<div className=' w-2 -rotate-90 relative bottom-14 lg:left-16 lg:text-3xl md:text-2xl md:left-[5.5rem]'>{exploreWorlds[4].title}</div>)}

        </div>
      </div>

      <div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default TheWorld