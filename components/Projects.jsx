import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import discordJS from '../public/assets/discordjs.png';

import ProjectItem from './ProjectItem';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Projects = () => {
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
     <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#70d095]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Vista Academy Discord Bot'
            backgroundImg={discordJS}
            projectUrl='/VistaAcademyBot'
            tech='Node JS'
          />
         
        </div>
        <p className='pt-5'>More public projects coming soon.</p>
      </div>
    </div>
  </motion.div>
   
  );
};

export default Projects;