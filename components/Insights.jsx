"use client";

import React from "react";
import SectionText from "./SectionText";
import { motion } from "framer-motion";
import { worldMotion } from "@/utils/motion";

function Insights() {
  return (
    <div className=" my-12 mx-6 lg:mx-24">
        <div>
            <SectionText title={"Insight"} position={"justify-center -mb-8"}/>
            <p className=" text-center mt-10 text-3xl font-bold lg:text-6xl md:text-5xl">Insight about metaverse</p>
        </div>
        <div className="">
            <motion.div 
                variants={worldMotion(150 , 0.2)} 
                initial='hidden'
                whileInView='visible'
                className=" lg:flex md:flex">
                <img 
                    src="/insight-01.png"
                    alt="insight image"
                    className=" w-full h-[250px] rounded-[35px] mt-12 object-cover lg:w-64 md:w-60"
                />
                <div className=" lg:ml-24 md:ml-20 md:flex md:flex-col justify-center max-w-[650px]">
                    <p className=" text-2xl leading-8 mt-8 lg:text-4xl lg:leading-[65px] md:text-xl">The launch of the Metaverse makes Elon musk ketar-ketir</p>
                    <h4 className=" text-sm mt-2 text-slate-400 lg:text-2xl md:text-sm">Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.</h4>
                </div>
                <img 
                    src="/arrow.svg"
                    alt="arrow"
                    className=" bg-transparent border-[1px] border-white p-8 rounded-full h-fit lg:mt-[100px] md:p-4 md:mt-[130px] ml-auto xm:invisible sm:invisible md:visible lg:visible"
                />
            </motion.div>
            <motion.div 
                variants={worldMotion(150 , 0.4)} 
                initial='hidden'
                whileInView='visible'
                className="lg:flex md:flex">
                <img 
                    src="/insight-02.png"
                    alt="insight image"
                    className=" w-full h-[250px] rounded-[35px] mt-12 object-cover lg:w-64 md:w-60"
                />
                <div className=" lg:ml-24 md:ml-20 md:flex md:flex-col justify-center max-w-[650px]">
                    <p className=" text-2xl leading-8 mt-8 lg:text-4xl lg:leading-[65px] md:text-xl">7 tips to easily master the madness of the Metaverse</p>
                    <p className=" text-sm mt-2 text-slate-400 lg:text-2xl md:text-sm">Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.</p>
                </div>
                <img 
                    src="/arrow.svg"
                    alt="arrow"
                    className=" bg-transparent border-[1px] border-white p-8 rounded-full h-fit lg:mt-[100px] md:p-4 md:mt-[130px] ml-auto xm:invisible sm:invisible md:visible lg:visible"
                />
            </motion.div>
            <motion.div 
                variants={worldMotion(150 , 0.4)} 
                initial='hidden'
                whileInView='visible'
                className="lg:flex md:flex">
                <img 
                    src="/insight-03.png"
                    alt="insight image"
                    className=" w-full h-[250px] rounded-[35px] mt-12 object-cover lg:w-64 md:w-60"
                />
                <div className=" lg:ml-24 md:ml-20 md:flex md:flex-col justify-center max-w-[650px]">
                    <p className=" text-2xl leading-8 mt-8 lg:text-4xl lg:leading-[65px] md:text-xl">With one platform you can explore the whole world virtually</p>
                    <p className=" text-sm mt-2 text-slate-400 lg:text-2xl md:text-sm">Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.</p>
                </div>
                <img 
                    src="/arrow.svg"
                    alt="arrow"
                    className=" bg-transparent border-[1px] border-white p-8 rounded-full h-fit lg:mt-[100px] md:p-4 md:mt-[130px] ml-auto xm:invisible sm:invisible md:visible lg:visible"
                />
            </motion.div>
        </div>
    </div>
  )
}

export default Insights