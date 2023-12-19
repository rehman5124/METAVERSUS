'use client'

import React from 'react'
import { aboutMotion } from '@/utils/motion'
import { motion } from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter'

function SectionText(props) {

    const [text] = useTypewriter({
        words: [`${props.title}`],
        loop: false,
        typeSpeed: 80
    })

  return (
    <div>
        <motion.div 
            variants={aboutMotion(100 , 0)} 
            initial='hidden'
            whileInView="visible"
            className={` text-slate-400 flex flex-row my-4 ${props.position}`}>
            <p className=' border-l-2 border-slate-400 font-light text-sm text-slate-400 pl-1 z-10'>{text}</p>
        </motion.div>
    </div>
  )
}

export default SectionText