import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/background.png';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};
const About = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
    className="box"
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}
  >
    <div id='about' className='w-[90%] py-5 md:py-16 md:h-screen p-2 flex items-center '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#70d095]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='font-semibold py-2 text-gray-600'>
            Just another college student? Far from that. 
          </p>
          <p className='py-2 text-gray-600'>
            I started getting into programming by initially learning about the scripting language known as Lua 5 years ago. I was then an indie game developer on Roblox. From there, my interest in programming grew. Therefore, I had spent the 4 years after exposing myself to various programming languages and challenging myself to build something greater each time. There is never a time where programming language fail to amaze me.
          </p>
          <p className='py-2 text-gray-600'>
            I do take on smaller projects and gigs from time to time to sharpen my skill and further push my boundary to create something that used to be impossible to me. Currently, I am learning how to ustilise Next.js framework to create something that is impactful and powerful yet lightweight. 
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-100 h-100 flex items-center justify-center md: w-full h-auto m-auto rounded-xl hover:scale-105 ease-in duration-200'>
          <Image src={AboutImg} className ="rounded-2xl" alt='/' />
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default About;