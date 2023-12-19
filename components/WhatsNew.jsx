"use client";

import React from "react";
import SectionText from "./SectionText";
import { motion } from "framer-motion";
import { workingMotion } from "@/utils/motion";

function WhatsNew() {
  return (
    <div className=" lg:mx-36 lg:my-36 md:mx-36 md:my-36 flex lg:flex-row md:flex-col sm:flex-col flex-col">
      <div className=" gradient-05 width-[404px] h-[100vh] absolute left-[45%]">
        hello
      </div>
      <motion.div
        variants={workingMotion(0, -200 ,1, 0)}
        initial="hidden"
        whileInView="visible"
        className=" flex flex-col gap-y-10 mt-16 lg:ml-20 ml-12 z-10"
      >
        <SectionText title={"What's New?"} position={"justify-start -mb-8"} />
        <h1 className=" lg:text-5xl md:text-4xl sm:text-2xl text-xl font-bold lg:leading-[70px] md:leading-[60px]">
          What's new about <br />
          Metaversus?
        </h1>
        <div className=" flex gap-16">
          <div>
            <img
              src="/galleryIcon.svg"
              alt="gallery"
              className=" w-16 bg-slate-600 p-4 rounded-2xl"
            />
            <div>
                <h1 className=" text-2xl font-bold mt-8 mb-3">A Brandnew World</h1>
                <p className=" font-normal text-normal text-slate-400">we have the latest update<br />with new world for you to try<br />never mind.</p>
            </div>
          </div>
          <div>
            <img
              src="/headset.svg"
              alt="gallery"
              className=" w-16 bg-slate-600 p-4 rounded-2xl"
            />
            <div>
                <h1 className=" text-2xl font-bold mt-8 mb-3">More Realistic World</h1>
                <p className=" font-normal text-normal text-slate-400">In the latest update, your<br />eyes are narrow, making the<br />world more realistic than ever.</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.img
        variants={workingMotion(0, 350 , 1, 110)}
        initial="hidden"
        whileInView="visible"
        src="/planet-sphere02.png"
        alt="planet"
        className=" lg:w-[40%] md:w-[65%] sm:w-[65%] w-[100vw] mt-20 sm:relative z-10 ml-8"
      />
    </div>
  );
}

export default WhatsNew