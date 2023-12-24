"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return <section className='lg:py-16'>
 <div className='grid grid-cols-1 sm:grid-cols-12'>

    <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
     className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
    <h1 className='text-white mb-4  text-3xl sm:text-4xl lg:text-6xl lg:leading-normal  font-extrabold
  '>
  
  <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'>  Hello, I&apos;m{" "} </span>
  <br></br>
  <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Jimpa Gyatso',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        
        'Web Developer',
        1000,
        'Embedded Engineer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />

  </h1>
 
  <p className='text-base  mb-6 text-[#ADB7BE] sm:text-lg lg:text-xl'>
  I&apos;m a web developer skilled in frontend design, animations, and full-stack development, with a strong interest in embedded engineering for innovative solutions and cutting-edge projects.
  </p>
  <div  >
  
    <Link href="/#contact" className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500   hover:bg-slate-200 text-white'>
        Hire Me
    </Link>
    <Link
              href="/images/JIMPA_RESUME (34).pdf"
              className="px-1 inline-block py-1  sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500  hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
  </div>
    </motion.div>
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
    
    className='z-10  col-span-5 place-self-center mt-4 lg:mt-0 '>
    <div className='lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-purple-400 to-blue-400 w-[250px] h-[250px] relative'>
    <Image src="/images/heroimage.webp"
   alt="hero image"
   className=' absolute transform -translate-x-1/2 -translate-y-1/ left-1/2'
   width={350}
   height={350}
   />

    </div>


    </motion.div>
  
 </div>

  </section>
}

export default HeroSection