"use client";

import React from "react";
import { motion } from "framer-motion";
import { workingMotion } from "@/utils/motion";

function FounderInfo() {
  return (
    <div className=' m-6 flex flex-col lg:flex-row md:flex-row gap-8 mt-36 mb-28 lg:mx-24'>
        <div className=' gradient-02 h-[15%] w-[30%] absolute left-0' />
        <motion.div 
            variants={workingMotion(0 , -200 , 0 , 0)} 
            initial='hidden'
            whileInView='visible'
            className=' bg-transparent border-[1px] border-slate-500 p-4 rounded-3xl flex flex-col z-20 lg:h-[80vh] md:h-[80vh] lg:w-[40%] md:w-[40%] lg:justify-center md:justify-center lg:px-8'>
            <div className=' mb-6'>
                <h1 className=' text-xl font-semibold z-20 lg:text-3xl md:text-2xl'>ZUCKERBERG</h1>
                <h4 className=' text-sm font-light lg:text-base'>Founder Metaversus</h4>
            </div>
            <p className=' lg:text-2xl '>“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
        </motion.div>
        <div className=''>
            <motion.img 
                variants={workingMotion(0 , 200 , 0 , 0)} 
                initial='hidden'
                whileInView='visible'
                src='/planet-09.png'
                alt='planet-09'
                className=' rounded-3xl lg:h-[80vh] md:h-[80vh] object-cover'
            />
        </div>
        {/* <div className=' gradient-02 h-[20%] w-[30%] absolute right-4' /> */}
    </div>
  )
}

export default FounderInfo