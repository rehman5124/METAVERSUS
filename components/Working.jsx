"use client";

import React, { useState } from "react";
import SectionText from "./SectionText";
import { motion } from "framer-motion";
import { workingMotion } from "@/utils/motion";

function Working() {

  return (
    <div className=" lg:mx-36 lg:my-36 md:mx-36 md:my-36 flex lg:flex-row md:flex-col sm:flex-col flex-col">
      <div className=" gradient-04 width-[404px] h-[100vh] absolute left-[45%]">hello</div>
      <motion.img 
        variants={workingMotion(0 , -350 , 1 , 110)}
        initial="hidden"
        whileInView="visible" 
        src="/planet-sphere01.png" 
        alt="planet" 
        className=" lg:w-[50%] md:w-[70%] sm:w-[70%] w-[100vw] sm:relative z-20" 
      />
      <motion.div 
        variants={workingMotion(0 , 200 , 1 , 0)}
        initial="hidden"
        whileInView="visible" 
        className=" flex flex-col gap-y-10 lg:mt-16 ml-8 z-10">
        <SectionText
          title={"How Metaversus Works"}
          position={"justify-start -mb-8"}
        />
        <h1 className=" lg:text-5xl md:text-2xl sm:text-xl text-sm  font-bold lg:leading-[70px]">
          Get Started with just <br />a few Clicks
        </h1>
        <div className=" flex gap-4 text-sm">
          <p className=" bg-slate-600 p-4 text-xl font-semibold rounded-2xl">
            01
          </p>
          <h2 className=" lg:text-xl md:text-xl sm:text-xl text-slate-400">
            Find a world that suits you and <br />
            you want to enter
          </h2>
        </div>
        <div className=" flex gap-4 text-sm">
          <p className=" bg-slate-600 p-4 text-xl font-semibold rounded-2xl">
            02
          </p>
          <h2 className=" lg:text-xl md:text-xl sm:text-xl text-slate-400">
            Enter the world by reading <br />
            bismilah to be safe
          </h2>
        </div>
        <div className=" flex gap-4">
          <p className=" bg-slate-600 p-4 text-xl font-semibold rounded-2xl">
            03
          </p>
          <h2 className=" lg:text-xl md:text-xl sm:text-xl text-slate-400">
            No need to beat around the <br />
            bush, just have fun
          </h2>
        </div>
      </motion.div>
    </div>
  );
}

export default Working;
