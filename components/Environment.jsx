"use client";

import React from "react";
import SectionText from "./SectionText";
import { motion } from "framer-motion";
import { worldMotion } from "@/utils/motion";

function Environment() {
  return (
    <div className=" my-16">
        <div className=" mx-8 lg:mx-28 md:mx-20">
            <SectionText title={"People on the World"} position={"justify-center -mb-8"}/>
            <h1 className=" mt-10 text-center text-2xl font-bold leading-10 lg:text-6xl lg:leading-[80px] md:text-4xl">Track friends around you and invite them to play together in the same world</h1>
        </div>
        <motion.div 
            variants={worldMotion(150, 0.5)}
            transition={{ease :'easeIn'}}
            initial='hidden'
            whileInView='visible'
            className=" mx-8 lg:mx-20 lg:my-20">
            <img 
                src="/people-01.png"
                alt="people-01"
                className=" w-16 bg-slate-600 rounded-full p-2 absolute ml-8 lg:ml-[200px] lg:mt-[100px]"
            />
            <img 
                src="/map.png"
                alt="map"
                className=" mt-8"
            />
            <img 
                src="/people-02.png"
                alt="map"
                className=" w-16 bg-slate-600 rounded-full p-2 absolute right-52 -mt-[150px] md:right-[420px] lg:right-[700px] lg:-mt-[250px]"
            />
            <img 
                src="/people-03.png"
                alt="map"
                className=" w-16 bg-slate-600 rounded-full p-2 absolute right-16 -mt-[100px] lg:right-[200px] lg:-mt-[150px]"
            />
            
        </motion.div>
    </div>
  )
}

export default Environment