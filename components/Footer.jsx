"use client";

import React from "react";
import { motion } from "framer-motion";
import { footerMotion } from "@/utils/motion";

function Footer() {
  return (
    <motion.div 
      variants={footerMotion}
      initial='hidden'
      whileInView='visible' 
      className=" mx-8 lg:mx-24 mb-8">
      <div className='  flex flex-col lg:flex-row md:flex-row'>
        <h1 className=" text-[2.5rem] font-bold lg:text-6xl">
          Enter the Metaverse
        </h1>
        <button className=" bg-purple-700 p-4 flex gap-3 rounded-full font-semibold mt-4 w-fit lg:ml-auto  md:ml-auto md:pt-5 md:mt-0 lg:mt-0 lg:pt-5">
          <img src="/headset.svg" alt="headset" />
          Enter Metaverse
        </button>
      </div>
      <div className=' gradient-05 h-[15%] w-[25%] absolute left-[40vw]'/>
      <div>
        <hr className=' mt-12 opacity-20 border-white'/>
        <div className=' flex flex-col justify-between mt-16 gap-y-4 lg:flex-row md:flex-row'>
          <h2 className=' text-2xl font-bold'>METAVERSUS</h2>
          <h4 className=' text-sm font-light opacity-50'>Copyright © 2021 - 2022 Metaversus. All rights reserved</h4>
          <div className=' flex gap-4'>
            <img src='/twitter.svg' alt='twitter'/>
            <img src='/linkedin.svg' alt='linkedin'/>
            <img src='/instagram.svg' alt='instagram'/>
            <img src='/facebook.svg' alt='facebook'/>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer