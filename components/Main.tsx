import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {motion} from 'framer-motion'
const Main = () => {
  return (
    <div id='home' className='pt-10 w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
        <motion.div initial={{translateY: -100,opacity:0}} animate={{translateY: 0,opacity:1}} transition={{ ease: "easeOut", duration: 1.5, delay: 4}}>
          <p className='text-sm tracking-widest text-gray-600'>
            Do something <span className='text-[#70d095] font-semibold'>new {` & `} bold</span> together
          </p>
          </motion.div>
         <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ ease: "easeOut", duration: 1,delay:2}}>
         <h1 className=' py-4 text-gray-700 font-light'>
            I am <span className='text-[#70d095] font-bold'> Wei</span>.
          </h1>
         </motion.div>
         <motion.div initial={{translateY: 200,opacity:0}} animate={{translateY: 0,opacity:1}} transition={{ ease: "easeOut", duration: 1.5, delay: 4}}>
          <h1 className='py-2 text-gray-700'><span className='font-light'>A future {" "} </span> full
            stack <span className='font-light'>developer </span></h1>
          <p className='py-4 text-[#70d095] sm:max-w-[70%] m-auto'>
            I am currently learning to develop with both front-end and back-end engines through my own small projects.
          </p>
          <div className='flex items-center justify-between max-w-[180px] m-auto py-4'>
          <motion.div initial={{rotate:180}}animate={{rotate: 360}}  transition={{ duration: 1 }}>
          <a
              href='https://github.com/djng314'
              target='_blank'
              rel='noreferrer'
            >
              <div className='hover:animate-pulse rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
          </motion.div>
          <motion.div initial={{rotate:180}}animate={{rotate: 0}}  transition={{ duration: 1 }}>
            <Link href='/#contact'>
              <div className='hover:animate-pulse rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            </motion.div>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;