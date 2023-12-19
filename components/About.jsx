'use client';

import React from 'react'
import { motion } from 'framer-motion';
import { aboutMotion } from '@/utils/motion';
import { useTypewriter} from 'react-simple-typewriter'

function About() {

    const [text] = useTypewriter({
        words: ['About MetaVersus'],
        loop: false,
        typeSpeed: 80
    })


  return (
    <motion.div className=' flex justify-center mb-16 md:my-24 md:mx-8 lg:my-20 lg:mx-16 mx-8 flex-col text-center'>
        <div className=' gradient-03 inset-4 w-[50%] py-10 text-transparent ml-auto'> hello</div>
        <motion.div 
            variants={aboutMotion(100 , 0)} 
            initial='hidden'
            whileInView="visible"
            className=' text-slate-400 flex flex-row justify-center my-4'>
            <p className=' border-l-2 border-slate-400 font-light text-sm text-slate-400 pl-1 z-10'>{text}</p>
        </motion.div>
        <motion.div
            variants={aboutMotion(100 , 0.8)} 
            initial='hidden' 
            whileInView='visible'
            className=''>
            <p className=' text-lg md:text-2xl md:px-4 lg:text-4xl lg:px-8 text-slate-400 lg:leading-[46px] z-10'><b className=' text-white font-bold'>Metaverse</b> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the madness of the metaverse of today, using only <b className=' text-white font-bold'>VR devices</b> you can easily explore the metaverse world you want, turn your dreams into reality. Let's <b className='text-white font-bold'>explore</b> the madness of the metaverse by scrolling down</p>
        </motion.div>
        <div className=' flex flex-row justify-center mt-8'>
            <motion.img
                variants={aboutMotion(80 , 1)}
                initial='hidden' 
                whileInView='visible'
                src='/arrowDown.svg'
                alt='arrow'
                className=' w-12 cursor-pointer z-10'
            />
        </div>
        <div className=' gradient-02 inset-4 w-[50%] py-10 text-transparent'> hello</div>
    </motion.div>
  )
}

export default About