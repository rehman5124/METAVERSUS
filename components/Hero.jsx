'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { heroMotion, slideIn } from '@/utils/motion';

function Hero() {

  const slideHandler = (elmRef) => {
    window.scrollTo({top: 1700 ,behavior: 'smooth'});
  }

  return (
    <motion.div
        variants={heroMotion}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: false , amount: 0.25}}
        className=' flex justify-center items-center flex-col lg:mb-28 sm:leading-[60px] md:leading-[100px] lg:leading-[140px] leading-[55px] my-20'>
        <motion.div variants={heroMotion(1.3 , "spring")} className=' absolute w-[40%] h-[40%] inset-4 gradient-01'/>
        <motion.h1 variants={heroMotion(1, "spring")} className=' lg:text-[145px] z-10 md:text-[100px] sm:text-[60px] text-[45px] font-bold'>METAVERSE</motion.h1>
        <motion.div variants={heroMotion(1.2, "spring")} className=' z-10 flex items-center'>
            <h1 className=' lg:text-[145px] md:text-[100px] sm:text-[60px] text-[45px] font-bold'>MA</h1>
            <div className={` sm-D md-D h-[33px] w-[60px] lg-D border-8 rounded-r-[20px] mx-2 `}></div>
            <h1 className=' lg:text-[145px] md:text-[100px] sm:text-[60px] text-[45px] font-bold'>NESS</h1>
        </motion.div>
        <motion.div variants={slideIn} initial="hidden" whileInView="visible" className=' hero-gradient absolute sm:h-[325px] md:h-[270px] lg:h-[340px] w-[90vw] h-[320px] rounded-tl-[140px]' />
        <motion.img 
            src='/hero.jpg'
            alt='hero'
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className=' w-[90vw] lg:h-[500px] h-[350px] rounded-tl-[140px] relative -top-[30px] mt-3'
        />
        <motion.img 
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src='/stamp.png'
          alt='stamp'
          onClick={slideHandler}
          className=' w-28 cursor-pointer absolute right-8 mt-[410px] md:right-16 md:mt-[500px] lg:right-24 lg:mt-[730px] lg:w-36'
        />

    </motion.div>
  )
}

export default Hero